import React from 'react';
import {connect} from 'react-redux';
// import { compose } from 'redux';

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
  deactivateModalToRead: () => (dispatch) => {
    dispatch(globalActionCreators.changeMode(NEWSFEED));
    dispatch(articlesActionCreators.setCurrentArticle(null));
  },
  activateModalToChange: (newsID) => (dispatch) => {
    dispatch(articlesActionCreators.setCurrentArticle(newsID));
    dispatch(globalActionCreators.changeMode(TO_CHANGE));
  },
  deactivateModalToChange: () => (dispatch) => {
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