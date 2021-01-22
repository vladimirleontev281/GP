import { initialize as initializeReduxForm } from 'redux-form';
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
    api.setArticle(getItemToSend(formData))
    .then(response => setChangesAndToggleToMain(response.body, dispatch));
  },
  deleteNewsItem: id => dispatch => {
    dispatch(globalActionCreators.toggleLoading(true));
    api.deleteArticle(id)
    .then(response => setChangesAndToggleToMain(response.body, dispatch));
  },
  setSearch: ({searchString, articles}) => dispatch => {
    dispatch(globalActionCreators.toggleLoading());
    const serchArray = (searchString) ? 
      articles.filter(item => item.newsLayout && item.newsLayout.indexOf(searchString) !== -1)
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
};
export default thunkCreators;

function setChangesAndToggleToMain(articles, dispatch) {
  dispatch(articlesActionCreators.setArticles(articles));
  dispatch(globalActionCreators.changeMode(NEWSFEED));
  dispatch(globalActionCreators.toggleLoading(false));
}