import { initialize as initializeReduxForm } from 'redux-form';
import {getNewItem} from '../utils';
import { 
  actionCreators as globalActionCreators, NEWSFEED, TO_READ, TO_CHANGE
} from './reducers/globalReducer';
import {actionCreators as articlesActionCreators} from './reducers/articlesReducer';
import api from '../api/api';


const thunkCreators = {
  setBaseItems: data => dispatch => {
    dispatch(articlesActionCreators.setArticles(data));
    dispatch(globalActionCreators.toggleLoading());
  },
  activateModalToRead: newsID => dispatch => {
    dispatch(articlesActionCreators.setCurrentArticle(newsID));
    dispatch(globalActionCreators.changeMode(TO_READ));
  },
  activateFormToChange: newsID => dispatch => {
    dispatch(articlesActionCreators.setCurrentArticle(newsID));
    dispatch(globalActionCreators.changeMode(TO_CHANGE));
  },
  deactivateModal: () => dispatch => {
    dispatch(globalActionCreators.changeMode(NEWSFEED));
    dispatch(articlesActionCreators.setCurrentArticle(null));
  },
  initFormToChange: data => dispatch => {
    dispatch(initializeReduxForm('FormToChange', data));
  },
  setNewNewsItem: formData => dispatch => {
    dispatch(globalActionCreators.toggleLoading());
    api.setArticle(getNewItem(formData)).then(response => {
      dispatch(articlesActionCreators.setArticles(response.body));
      dispatch(globalActionCreators.changeMode(NEWSFEED));
      dispatch(globalActionCreators.toggleLoading());
    })
  },
  deleteNewsItem: id => dispatch => {
    dispatch(globalActionCreators.toggleLoading());
    api.deleteArticle(id).then(response => {
      dispatch(articlesActionCreators.setArticles(response.body));
      dispatch(globalActionCreators.changeMode(NEWSFEED));
      dispatch(globalActionCreators.toggleLoading());
    })
  },
  setSearch: ({searchString, articles}) => dispatch => {
    dispatch(globalActionCreators.toggleLoading());
    const serchArray = (searchString) ? 
      articles.filter(item => item.newsLayout.indexOf(searchString) !== -1)
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
};
export default thunkCreators;