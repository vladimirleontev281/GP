import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import api from '../../api/api';
import {
  sortKeys, referenceObjForSort, DEFAULT_SORT_DESCRIP
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
  user: {name: 'Alistair', id: 3},
}};

const NewsfeedContainer = (props) => {
  useEffect(() => {
    api.getArticles().then(response => {
      if (response.ok && response.body) props.setBaseItems(response.body);
    })
  }, []);

  const propsToSend = {...props, 
    articles: sortArticles(props.articles, props.sortVariant),
    sortArray: Object.keys(referenceObjForSort),
    defaultSort: DEFAULT_SORT_DESCRIP,
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