const init = {
  articles: [],
  currentArticle: null,
  search: null,
};

const actionTypes = {
  setArticles: 'SET-ARTICLES',
  setCurrentArticle: 'SET-CURRENT-ARTICLE',
  setSearchArticles: 'SET-SEARCH-ARTICLES',
};

export const actionCreators = {
  setArticles: data => {return {type: actionTypes.setArticles, data}},
  setCurrentArticle: id => {return {type: actionTypes.setCurrentArticle, id}},
  setSearchArticles: data => {return {type: actionTypes.setSearchArticles, data}}
};

const articlesReducer = (state = init, action) => {
  switch (action.type) {
    case actionTypes.setArticles:
      return {
        ...state,
        articles: action.data
      };
    case actionTypes.setCurrentArticle:
      return {
        ...state,
        currentArticle: (action.id === null) ? 
          null : state.articles.filter(item => item.id === action.id)[0]
      };
    case actionTypes.setSearchArticles:
      return {
        ...state,
        search: action.data,
      };
    default:
      return state;
  }
};

export default articlesReducer;