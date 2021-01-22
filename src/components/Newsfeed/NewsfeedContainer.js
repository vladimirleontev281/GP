import React, { useEffect } from 'react';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
// import { compose } from 'redux';

import api from '../../api/api';
import {sortKeys} from '../../store/reducers/globalReducer';
import thunkCreators from '../../store/thunkCreators';
import Newsfeed from './Newsfeed';

const mapStateToProps = state => {return {
  isLoading: state.global.isLoading,
  mode: state.global.mode,
  articles: state.articles.articles,
  currentArticle: state.articles.currentArticle,
  search: state.articles.search,
  sortVariant: state.global.sortVariant,
}};

const NewsfeedContainer = (props) => {
  useEffect(() => {
    api.getArticles().then(response => {
      if (response.ok && response.body) props.setBaseItems(response.body);
    })
  }, []);

  const propsToSend = {...props, articles: sortArticles(props.articles, props.sortVariant)};

  return <Newsfeed {...propsToSend}/>

  function sortArticles(articles, sortVariant) {
    switch (sortVariant) {
      case sortKeys.dateUp: return [...articles].sort((a, b) => a.date - b.date);
      default: return [...articles].sort((a, b) => b.date - a.date);
    }
  }
}
export default connect(mapStateToProps, {...thunkCreators})(NewsfeedContainer);