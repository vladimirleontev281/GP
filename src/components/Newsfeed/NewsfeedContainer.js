import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { compose } from 'redux';

import withRedirect from '../../hoc/withRedirect';
import api from '../../api/api';
import {
  actionCreators as globalActionCreators, sortKeys, referenceObjForSort, DEFAULT_SORT_NAME
} from '../../store/reducers/globalReducer';
import {actionCreators as articlesActionCreators} from '../../store/reducers/articlesReducer';
import {actionCreator as setRedirect} from '../../store/reducers/redirectReducer';
import thunkCreators from '../../store/thunkCreators/newsfeedThunkCreators';
import commonThunkCreators from '../../store/thunkCreators/commonThunkCreators';
import Newsfeed from './Newsfeed';

const mapStateToProps = state => {return {
  isLoading: state.global.isLoading,
  mode: state.global.mode,
  articles: state.articles.articles,
  currentArticle: state.articles.currentArticle,
  filters: state.articles.filters,
  sortVariant: state.global.sortVariant,
  arrOfSortNames: Object.keys(referenceObjForSort),
  defaultSortName: DEFAULT_SORT_NAME,
  isMenuOpen: state.global.isMenuOpen,
  user: state.global.user,
  redirect: state.redirect,
  filterMethods: ['autor name', 'news preview'],
}};

const NewsfeedContainer = ({setUser, ...props}) => {
  const FILTER_TYPE = 'search';
  const FILTER_METHOD = 'search';
  let [searchValue, setSearchValue] = useState('');

  const refresh = () => {
    if (searchValue) {
      props.setFilter({type: FILTER_TYPE, method: FILTER_METHOD, value: searchValue});
    } else {
      props.removeFilter({type: FILTER_TYPE});
    };
  };

  useEffect(() => refresh(), [searchValue]);
  useEffect(() => {api.getArticles().then(response => {
    if (response.ok && response.body) props.setBaseItems(response.body);
  })}, []);
  useEffect(() => {api.checkUser().then(response => setUser(response.body));}, []);

  const propsToSend = {...props, searchValue, setSearchValue, 
    articles: sortArticles(setAllFilters(props.articles, props.filters), props.sortVariant),
  };
  return <Newsfeed {...propsToSend}/>

  function setAllFilters(articles, filters) {
    if (!filters.length) return [...articles];
    return filters.reduce((accumulator, filterItem) => {
      accumulator = setFilterItem(accumulator, filterItem);
      return accumulator;
    }, [...articles])
  }

  function setFilterItem(arr, filter) {
    debugger;
    switch (filter.method) {
      case 'autor name':
        return arr.filter(item => {
          let author = item.owner.name.toLowerCase() + ' ' + item.owner.surname.toLowerCase();
          return author.includes(filter.value.toLowerCase())
        });
      case 'news preview':
        return arr.filter(item => item.preview.toLowerCase().includes(filter.value.toLowerCase()));
      default:
        return arr.filter(item => (
          item.name.toLowerCase().includes(filter.value.toLowerCase()) || 
          item.preview.toLowerCase().includes(filter.value.toLowerCase()) || 
          item.newsLayout.toLowerCase().includes(filter.value.toLowerCase())
        ));
    }
  }

  function sortArticles(articles, sortVariant) {
    if (!articles.length) return [];
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
    setFilter: articlesActionCreators.setFilter,
    removeFilter: articlesActionCreators.removeFilter,
    setRedirect,
    ...thunkCreators,
    ...commonThunkCreators,
  }),
  withRouter,
  withRedirect
)(NewsfeedContainer);