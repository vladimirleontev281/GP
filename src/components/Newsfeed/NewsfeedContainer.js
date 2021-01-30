import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import api from '../../api/api';
import {
  sortKeys, referenceObjForSort, DEFAULT_SORT_NAME
} from '../../store/reducers/globalReducer';
import thunkCreators from '../../store/thunkCreators/newsfeedThunkCreators';
import Newsfeed from './Newsfeed';

const mapStateToProps = state => {return {
  isLoading: state.global.isLoading,
  mode: state.global.mode,
  articles: state.articles.articles,
  currentArticle: state.articles.currentArticle,
  search: state.articles.search,
  sortVariant: state.global.sortVariant,
  isMenuOpen: state.global.isMenuOpen,
  user: state.global.user,
}};

const NewsfeedContainer = (props) => {
  useEffect(() => {
    api.getArticles().then(response => {
      if (response.ok && response.body) props.setBaseItems(response.body);
    })
  }, []);

  const propsToSend = {...props, 
    articles: sortArticles(props.articles, props.sortVariant),
    arrOfSortNames: Object.keys(referenceObjForSort),
    defaultSortName: DEFAULT_SORT_NAME,
  };
  return <Newsfeed {...propsToSend}/>

  function sortArticles(articles, sortVariant) {
    switch (sortVariant) {
      case sortKeys.dateUp: return [...articles].sort((a, b) => a.date - b.date);
      case sortKeys.dateDown: return [...articles].sort((a, b) => b.date - a.date);
      default: return [];
    }
  }
}
export default connect(mapStateToProps, {...thunkCreators})(NewsfeedContainer);