import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { compose } from 'redux';

import withRedirect from '../../hoc/withRedirect';
import api from '../../api/api';
import {
  actionCreators as globalActionCreators, sortKeys, referenceObjForSort, DEFAULT_SORT_NAME
} from '../../store/reducers/globalReducer';
import {actionCreator as setRedirect} from '../../store/reducers/redirectReducer';
import thunkCreators from '../../store/thunkCreators/newsfeedThunkCreators';
import commonThunkCreators from '../../store/thunkCreators/commonThunkCreators';
import Newsfeed from './Newsfeed';

const mapStateToProps = state => {return {
  isLoading: state.global.isLoading,
  mode: state.global.mode,
  articles: state.articles.articles,
  currentArticle: state.articles.currentArticle,
  search: state.articles.search,
  sortVariant: state.global.sortVariant,
  arrOfSortNames: Object.keys(referenceObjForSort),
  defaultSortName: DEFAULT_SORT_NAME,
  isMenuOpen: state.global.isMenuOpen,
  user: state.global.user,
  redirect: state.redirect,
}};

const NewsfeedContainer = ({setBaseItems, setUser, resetState, ...props}) => {
  useEffect(() => {api.getArticles().then(response => {
    if (response.ok && response.body) setBaseItems(response.body);
  })}, []);
  useEffect(() => {api.checkUser().then(response => setUser(response.body));}, []);

  const propsToSend = {...props, articles: sortArticles(props.articles, props.sortVariant)};
  return <Newsfeed {...propsToSend}/>

  function sortArticles(articles, sortVariant) {
    switch (sortVariant) {
      case sortKeys.dateUp: return [...articles].sort((a, b) => a.date - b.date);
      case sortKeys.dateDown: return [...articles].sort((a, b) => b.date - a.date);
      default: return [];
    }
  }
}
export default compose(
  connect(mapStateToProps, {
    setUser: globalActionCreators.setUser, 
    setMenu: globalActionCreators.setMenuOpen,
    setRedirect,
    ...thunkCreators,
    ...commonThunkCreators,
  }),
  withRouter,
  withRedirect
)(NewsfeedContainer);