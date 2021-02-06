const init = {
  articles: [],
  currentArticle: null,
  filters: [],
};

const actionTypes = {
  setArticles: 'SET-ARTICLES',
  setCurrentArticle: 'SET-CURRENT-ARTICLE',
  setFilter: 'SET-FILTER',
  removeFilter: 'REMOVE-FILTER'
};

export const actionCreators = {
  setArticles: data => {return {type: actionTypes.setArticles, data}},
  setCurrentArticle: id => {return {type: actionTypes.setCurrentArticle, id}},
  setFilter: data => {return {type: actionTypes.setFilter, data}},
  removeFilter: data => {return {type: actionTypes.removeFilter, data}},
};

const articlesReducer = (state = init, action) => {
  switch (action.type) {
    case actionTypes.setArticles:
      return {
        ...state,
        articles: action.data,
      };
    case actionTypes.setCurrentArticle:
      return {
        ...state,
        currentArticle: (action.id === null) ? 
          null : state.articles.filter(item => item.id === action.id)[0]
      };
    case actionTypes.setFilter:
      let hasThisFilterType = state.filters.reduce((accumulator, item) =>{
        if (item.type === action.data.type) accumulator = true;
        return accumulator;
      }, false);
      return {
        ...state,
        filters: !hasThisFilterType ? 
          [action.data]
        : state.filters.map(item => item.type === action.data.type ? 
            {type: item.type, method: action.data.method, value: action.data.value} : item
          ),
      };
    case actionTypes.removeFilter:
      return {
        ...state,
        filters: state.filters.filter(item => item.type !== action.data.type),
      };
    default:
      return state;
  }
};

export default articlesReducer;