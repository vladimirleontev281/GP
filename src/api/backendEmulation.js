import baseAPI, {KEYS as baseKeys} from './localStorage';

export const SERVER = '/';
export const urlObj = {
  getArticles: 'articles',
  setArticle: 'setitem',
  deleteArticle: 'deleteitem',
}

const backendEmulation = (url, options) => {
  let response = {ok: true, body: null};

  switch (url) {
    case SERVER + urlObj.getArticles:
      response.body = baseAPI.get(baseKeys.articles);
      break;
    case SERVER + urlObj.setArticle:
      let articles = baseAPI.get(baseKeys.articles);
      let newItem = new GetNewArticlesItem(articles, options.body);
      let newArticles = options.method === 'PUT' ?
        articles.map(item => (item.id === newItem.id) ? newItem : item)
      : articles.concat(newItem);
      response.body = newArticles;
      baseAPI.set(baseKeys.articles, newArticles);
      break;
    case SERVER + urlObj.deleteArticle:
      response.body = baseAPI.get(baseKeys.articles).filter(item => item.id !== options.body.id);
      baseAPI.set(baseKeys.articles, response.body)
      break;
    default: 
  }
  return response;
}
export default backendEmulation;



function GetNewArticlesItem(articles, changedItem) {
  let isNewInstance = !changedItem;
  let isNewItem = changedItem && !changedItem.id;
  let isItemToChange = !isNewInstance && !isNewItem;
  return {
    id: (isNewInstance || isNewItem) ? getLastID() + 1 : changedItem.id,
    date: (isNewInstance || isNewItem) ? +(new Date()) : getDateByID(changedItem.id),
    original: (isItemToChange) ? changedItem.original || null : null,
    name: (isItemToChange) ? changedItem.name || null : null,
    preview: (isItemToChange) ? changedItem.preview || null : null,
    newsLayout: (isItemToChange) ? changedItem.newsLayout || null : null,
    images: {
      small: (isItemToChange) ? changedItem.images.small || null : null,
      large: (isItemToChange) ? changedItem.images.large || null : null,
    }
  };

  function getLastID() {
    if (!articles.length) return 0;
    let sortArray = [...articles].sort((a, b) => {return a.id - b.id});
    return sortArray[sortArray.length - 1].id;
  }

  function getDateByID(id) {
    return articles.reduce((accumulator, currentItem) => {
      accumulator = currentItem.id === id ? currentItem.date : accumulator;
      return accumulator;
    }, null);
  }
}