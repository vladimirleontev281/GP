import { initialize as initializeReduxForm, SubmissionError } from 'redux-form';
import {getItemToSend} from '../utils';
import {
  actionCreators as globalActionCreators, NEWSFEED, referenceObjForSort
} from './reducers/globalReducer';
import {actionCreators as articlesActionCreators} from './reducers/articlesReducer';
import api from '../api/api';


const thunkCreators = {
  setBaseItems: data => dispatch => {
    dispatch(articlesActionCreators.setArticles(data));
    dispatch(globalActionCreators.toggleLoading(false));
  },
  activateModal: (newsID, mode) => dispatch => {
    dispatch(articlesActionCreators.setCurrentArticle(newsID));
    dispatch(globalActionCreators.setMenuOpen(false));
    dispatch(globalActionCreators.changeMode(mode));
  },
  deactivateModal: () => dispatch => {
    dispatch(globalActionCreators.changeMode(NEWSFEED));
    dispatch(articlesActionCreators.setCurrentArticle(null));
  },
  initFormToChange: data => dispatch => {
    dispatch(initializeReduxForm('FormToChange', data));
  },
  setNewsItem: formData => dispatch => {
    dispatch(globalActionCreators.toggleLoading(true));
    const checkingURLs = [];
    if (formData.smallImage) checkingURLs.push({key: 'smallImage', data: formData.smallImage});
    if (formData.largeImage) checkingURLs.push({key: 'largeImage', data: formData.largeImage});
    if (formData.largeImage) checkingURLs.push({key: 'original', data: formData.original});

    if (checkingURLs.length) {
      return Promise.all(checkingURLs.map(item => fetch(item.data, {method: 'HEAD'})))
      .then(responses => {
        let allURLsIsGood = true;
        responses.forEach(item => {if(!item.ok) allURLsIsGood = false});
        if (!allURLsIsGood) {
          const ERROR_TEXT = 'The resource you specified is not responding!';
          const errors = {_error: 'Data loading error'};
          checkingURLs.forEach((item, index) => {
            if (!responses[index].ok) errors[item.key] = ERROR_TEXT
          });
          dispatch(globalActionCreators.toggleLoading(false));
          throw new SubmissionError(errors);
        }
      });
    }
    setArticle(getItemToSend(formData))

    function setArticle(item) {
      api.setArticle(item)
      .then(response => setChangesAndToggleToMain(
        response.body, dispatch, formData.id ? false : true
      ));
    }
  },
  deleteNewsItem: id => dispatch => {
    dispatch(globalActionCreators.toggleLoading(true));
    api.deleteArticle(id)
    .then(response => setChangesAndToggleToMain(response.body, dispatch, true));
  },
  setSearch: ({searchString, articles}) => dispatch => {
    dispatch(globalActionCreators.toggleLoading());
    const serchArray = (searchString) ? 
      articles.filter(item => item.name && item.name.indexOf(searchString) !== -1 ||
                              item.preview && item.preview.indexOf(searchString) !== -1 ||
                              item.newsLayout && item.newsLayout.indexOf(searchString) !== -1
      )
    : null;
    dispatch(articlesActionCreators.setSearchArticles(serchArray));
    dispatch(globalActionCreators.toggleLoading());
  },
  clearSearch: () => dispatch => {
    dispatch(globalActionCreators.toggleLoading());
    dispatch(initializeReduxForm('Search', {inputField: ''}));
    dispatch(articlesActionCreators.setSearchArticles(null));
    dispatch(globalActionCreators.toggleLoading());
  },
  setSort: value => dispatch => {
    dispatch(globalActionCreators.setSort(referenceObjForSort[value]));
  },
  setMenu: value => dispatch => {
    dispatch(globalActionCreators.setMenuOpen(value));
  },
};
export default thunkCreators;

function setChangesAndToggleToMain(articles, dispatch, scroll) {
  dispatch(articlesActionCreators.setArticles(articles));
  dispatch(globalActionCreators.changeMode(NEWSFEED));
  dispatch(globalActionCreators.toggleLoading(false));
  if (scroll) window.scrollTo(0, 0);
}