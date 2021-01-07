import React from 'react';
import {connect} from 'react-redux';
// import { compose } from 'redux';
import { initialize as initializeReduxForm } from 'redux-form';

import {
  actionCreators as globalActionCreators,
  NEWSFEED, TO_READ, TO_CHANGE
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
    let data = {
      ...formData,
      id: formData.id ? formData.id : getNewID(),
      new: !formData.id
    };

    // dispatch(articlesActionCreators.setCurrentArticle(null));
    // dispatch(globalActionCreators.changeMode(NEWSFEED));
  },
};

const NewsfeedContainer = (props) => {
  return <Newsfeed {...props}/>
}
export default connect(mapStateToProps, {
    // ...globalActionCreators, 
    // ...articlesActionCreators, 
    ...thunkCreators
  }
)(NewsfeedContainer);


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