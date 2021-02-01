import { initialize as initializeReduxForm, SubmissionError } from 'redux-form';
import {getItemToSend} from '../../utils';
import {
  actionCreators as globalActionCreators, NEWSFEED, referenceObjForSort, DEFAULT_SORT_NAME
} from '../reducers/globalReducer';
import {actionCreators as articlesActionCreators} from '../reducers/articlesReducer';
import {actionCreator as setRedirect} from '../reducers/redirectReducer';
import api from '../../api/api';


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
  setNewsItem: (formData, user) => dispatch => {
    dispatch(globalActionCreators.toggleLoading(true));
    const itemInfo = {...formData, owner: user.id};
    const keysForChecking = ['smallImage', 'largeImage', 'original'];
    // if the fields for links contain data then we form a verification array
    const checkingFields = keysForChecking.reduce((accumulator, currentItem) => {
      if (itemInfo[currentItem]) accumulator.push({key: currentItem, data: itemInfo[currentItem]});
      return accumulator;
    }, [])

    if (checkingFields.length) {
      return Promise.all(checkingFields.map(item => {
        return fetch(item.data, {method: 'HEAD', mode: 'no-cors'}).catch(r=>null);
      }))
      .then(responses => {
        const fieldsWithErrors = responses.reduce((accumulator, item, index) => {
          if(!item || item.status === 404) accumulator.push(checkingFields[index].key);
          return accumulator;
        }, []);
        if (fieldsWithErrors.length) throwErrors(fieldsWithErrors);
        setArticle(getItemToSend(itemInfo));
      });
    }
    setArticle(getItemToSend(itemInfo));

    function setArticle(item) {
      api.setArticle(item)
      .then(response => setChangesAndToggleToMain(
        response.body, dispatch, item.id ? false : true
      ));
    }
    function throwErrors(fieldsWithErrors) {
      const ERROR_TEXT = 'The resource you specified is not responding!';
      const errors = {_error: 'Data loading error'};
      fieldsWithErrors.forEach(item => {errors[item] = ERROR_TEXT});
      dispatch(globalActionCreators.toggleLoading(false));
      debugger;
      throw new SubmissionError(errors);
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
      articles.filter(item => (item.name && item.name.indexOf(searchString) !== -1) ||
                              (item.preview && item.preview.indexOf(searchString) !== -1) ||
                              (item.newsLayout && item.newsLayout.indexOf(searchString) !== -1)
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
  logout: (e, redirect) => dispatch => {
    e.preventDefault();
    dispatch(globalActionCreators.setMenuOpen(false));
    dispatch(globalActionCreators.toggleLoading(true));
    api.logout().then(r => {
      dispatch(globalActionCreators.setUser(null));
      if (redirect) {
        dispatch(setRedirect(redirect));
      } else {
        dispatch(globalActionCreators.toggleLoading(false));
      }
    });
  },
  resetState: () => dispatch => {
    dispatch(globalActionCreators.changeMode(NEWSFEED));
    dispatch(articlesActionCreators.setCurrentArticle(null));
    dispatch(initializeReduxForm('Search', {inputField: ''}));
    dispatch(articlesActionCreators.setSearchArticles(null));
    dispatch(globalActionCreators.setSort(referenceObjForSort[DEFAULT_SORT_NAME]));
    dispatch(globalActionCreators.setMenuOpen(false));
  },
};
export default thunkCreators;

function setChangesAndToggleToMain(articles, dispatch, scroll) {
  dispatch(articlesActionCreators.setArticles(articles));
  dispatch(globalActionCreators.changeMode(NEWSFEED));
  dispatch(globalActionCreators.toggleLoading(false));
  if (scroll) window.scrollTo(0, 0);
}