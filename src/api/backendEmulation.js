import baseAPI, {KEYS as baseKeys} from './localStorage';

export const SERVER = '/';
export const urlObj = {
  getArticles: 'articles',
  setArticle: 'setitem',
  deleteArticle: 'deleteitem',
}

const backendEmulation = (url, options) => {
  let response = {ok: true, body: null}, articles, newArticles;
  switch (url) {
    case SERVER + urlObj.getArticles:
      articles = baseAPI.get(baseKeys.articles);
      response.body = addOwnersData(baseAPI.get(baseKeys.articles), baseAPI.get(baseKeys.users));
      break;
    case SERVER + urlObj.setArticle:
      articles = baseAPI.get(baseKeys.articles);
      let newItem = new GetNewArticlesItem(articles, options.body);
      newArticles = options.method === 'PUT' ?
        articles.map(item => (item.id === newItem.id) ? newItem : item)
      : articles.concat(newItem);
      baseAPI.set(baseKeys.articles, newArticles);
      response.body = addOwnersData(newArticles, baseAPI.get(baseKeys.users));
      break;
    case SERVER + urlObj.deleteArticle:
      newArticles = baseAPI.get(baseKeys.articles).filter(item => item.id !== options.body.id);
      baseAPI.set(baseKeys.articles, newArticles);
      response.body = addOwnersData(newArticles, baseAPI.get(baseKeys.users));
      break;
    default: 
  }
  return response;
}
export default backendEmulation;

function getUser(users, id) {
  return users.filter(item => item.id === id)[0];
}

function addOwnersData(articles, users) {
  return articles.map(item => {
    let owner = getUser(users, item.owner);
    return {...item,
      owner: {
        id: owner.id,
        name: owner.name,
        surname: owner.surname,
    }}
  });
}

function getLastID(arr) {
  if (!arr.length) return 0;
  let sortArray = [...arr].sort((a, b) => {return a.id - b.id});
  return sortArray[sortArray.length - 1].id;
}

function GetNewArticlesItem(articles, changedItem) {
  let isNewInstance = !changedItem;
  let isNewItem = changedItem && !changedItem.id;
  let isItemToChange = !isNewInstance && !isNewItem;

  return {
    id: (isNewInstance || isNewItem) ? getLastID(articles) + 1 : changedItem.id,
    owner: (isItemToChange || isNewItem) ? changedItem.owner || null : null,
    date: (isNewInstance || isNewItem) ? +(new Date()) : getDateByID(changedItem.id),
    original: (isItemToChange || isNewItem) ? changedItem.original || null : null,
    name: (isItemToChange || isNewItem) ? changedItem.name || null : null,
    preview: (isItemToChange || isNewItem) ? changedItem.preview || null : null,
    newsLayout: (isItemToChange || isNewItem) ? changedItem.newsLayout || null : null,
    images: {
      small: (isItemToChange || isNewItem) ? changedItem.images.small || null : null,
      large: (isItemToChange || isNewItem) ? changedItem.images.large || null : null,
    }
  };

  function getDateByID(id) {
    return articles.reduce((accumulator, currentItem) => {
      accumulator = currentItem.id === id ? currentItem.date : accumulator;
      return accumulator;
    }, null);
  }
}

