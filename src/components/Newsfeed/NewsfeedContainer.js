import React, { useEffect } from 'react';
import {connect} from 'react-redux';
// import { compose } from 'redux';

import api from '../../api/api';
import thunkCreators from '../../store/thunkCreators';
import Newsfeed from './Newsfeed';


const mapStateToProps = state => {return {
  isLoading: state.global.isLoading,
  mode: state.global.mode,
  articles: state.articles.articles,
  currentArticle: state.articles.currentArticle,
  search: state.articles.search,
}};

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