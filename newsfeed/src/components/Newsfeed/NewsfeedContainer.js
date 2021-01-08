import React, { useEffect } from 'react';
import {connect} from 'react-redux';
// import { compose } from 'redux';
import { initialize as initializeReduxForm } from 'redux-form';

import {getNewItem} from '../../utils';
import api from '../../api/api';
import { 
  actionCreators as globalActionCreators, NEWSFEED, TO_READ, TO_CHANGE
} from '../../store/reducers/globalReducer';
import {actionCreators as articlesActionCreators} from '../../store/reducers/articlesReducer';
import Newsfeed from './Newsfeed';


const mapStateToProps = state => {return {
  isLoading: state.global.isLoading,
  mode: state.global.mode,
  articles: state.articles.articles,
  currentArticle: state.articles.currentArticle,
  search: state.articles.search,
}};

const thunkCreators = {
  setBaseItems: data => dispatch => {
    dispatch(articlesActionCreators.setArticles(data));
    dispatch(globalActionCreators.toggleLoading());
  },
  activateModalToRead: (newsID) => (dispatch) => {
    dispatch(articlesActionCreators.setCurrentArticle(newsID));
    dispatch(globalActionCreators.changeMode(TO_READ));
  },
  deactivateModal: () => (dispatch) => {
    dispatch(globalActionCreators.changeMode(NEWSFEED));
    dispatch(articlesActionCreators.setCurrentArticle(null));
  },
  activateFormToChange: (newsID) => (dispatch) => {
    dispatch(articlesActionCreators.setCurrentArticle(newsID));
    dispatch(globalActionCreators.changeMode(TO_CHANGE));
  },
  initFormToChange: (data) => (dispatch) => {
    dispatch(initializeReduxForm('FormToChange', data));
  },
  setNewNewsItem: (formData) => (dispatch) => {
    dispatch(globalActionCreators.toggleLoading());
    api.setArticle(getNewItem(formData)).then(response => {
      dispatch(articlesActionCreators.setArticles(response.body));
      dispatch(globalActionCreators.changeMode(NEWSFEED));
      dispatch(globalActionCreators.toggleLoading());
    })
  },
};

const NewsfeedContainer = (props) => {
  useEffect(() => {
    api.getArticles().then(response => {
      if (response.ok && response.body) props.setBaseItems(response.body);
    })
  }, []);
  return <Newsfeed {...props}/>
}
export default connect(mapStateToProps, {...thunkCreators})(NewsfeedContainer);


// export default compose(
//   connect(
//     mapStateToProps, 
//     {
//       ...globalActionCreators, 
//       ...globalThunkCreators, 
//       ...articlesActionCreators, 
//       ...articlesThunkCreators
//     }
//   ),
// )(NewsfeedContainer);