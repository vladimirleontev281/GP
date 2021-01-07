import news from '../../source/source.json';

const init = {
  articles: news,
  currentArticle: null,
  search: [],
};

const actionTypes = {
  setArticles: 'SET-ARTICLES',
  setCurrentArticle: 'SET-CURRENT-ARTICLE',
  setSearchArticles: 'SET-SEARCH-ARTICLES',
  addArticle: 'ADD-ARTICLE',
};

export const actionCreators = {
  setCurrentArticle: (id) => {return {type: actionTypes.setCurrentArticle, id}},
  addArticle: (data) => {return {type: actionTypes.addArticle, data}}
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
        search: (action.data === null) ? [] : action.data
      };
    case actionTypes.addArticle:
      const newItem = getValidFormat(action.data);
      return {
        ...state,
        articles: (action.data.new) ? 
                    state.articles.concat(newItem)
                  : state.articles.map(item => (item.id === newItem.id) ? newItem : item)
      };
    default:
      return state;
  }

  function getValidFormat(actionData) {
    return {
      id: actionData.id,
      original: actionData.original,
      name: actionData.name,
      preview: actionData.preview,
      newsLayout: actionData.newsLayout,
      images: {
        small: actionData.smallImage,
        large: actionData.largeImage,
      }
    }
  }
};

export default articlesReducer;