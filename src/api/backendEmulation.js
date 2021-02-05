import baseAPI, {KEYS as baseKeys} from './localStorage';

export const SERVER = '/';
export const urlObj = {
  getArticles: 'articles',
  setArticle: 'setitem',
  deleteArticle: 'deleteitem',
  checkUserData: 'checkuserdata',
  signIn: 'authentification',
  logout: 'logout',
}
const TOKEN_KEY = 'newsfeed-u';
const MAX_SESSION_DUR = 86400;

const backendEmulation = (url, options) => {
  let response = {ok: true, body: null}, articles, newArticles, token, users;
  const credentials = options && options.credentials === 'include' ? document.cookie : null;
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
    case SERVER + urlObj.checkUserData:
      token = getCredByKey(credentials, TOKEN_KEY);
      users = baseAPI.get(baseKeys.users);
      response.body = verifToken(users, token) ? getUserByToken(users, token) : null;
      break;
    case SERVER + urlObj.signIn:
      users = baseAPI.get(baseKeys.users);
      response.body = {errors: []};
      let userID = verifUser(users, options.body);
      if (userID) {
        setTokenInCredentials(getUser(users, userID), options.body.remember);
      } else {
        response.body.errors.push('Invalid username or password');
      }
      break;
    case SERVER + urlObj.logout:
      response.body = {errors: []};
      setTokenInCredentials(null);
      break;
    default: 
  }
  return response;
}
export default backendEmulation;

function getUser(users, id) {
  return users.filter(item => item.id === id)[0];
}
function getAllowedUserData(user) {
  return {id: user.id, name: user.name, surname: user.surname}
}
function addOwnersData(articles, users) {
  return articles.map(item => {
    return {...item, owner: getAllowedUserData(getUser(users, item.owner))}
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
    date: (isNewInstance || isNewItem) ? +(new Date()) : getDate(changedItem),
    original: (isItemToChange || isNewItem) ? changedItem.original || null : null,
    name: (isItemToChange || isNewItem) ? changedItem.name || null : null,
    preview: (isItemToChange || isNewItem) ? changedItem.preview || null : null,
    newsLayout: (isItemToChange || isNewItem) ? changedItem.newsLayout || null : null,
    images: {
      small: (isItemToChange || isNewItem) ? changedItem.images.small || null : null,
      large: (isItemToChange || isNewItem) ? changedItem.images.large || null : null,
    }
  };

  function getDate(item) {
    return articles.reduce((accumulator, currentItem) => {
      accumulator = currentItem.id === item.id ? currentItem.date : accumulator;
      return accumulator;
    }, null);
  }
}

function getCredByKey(credentials, key) {
  let matches = credentials.match(new RegExp(
    "(?:^|; )" + key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : null;
}
function setTokenInCredentials(user, remember) {
  let token = user ? getToken(user) : '';
  let updatedCookie = `${encodeURIComponent(TOKEN_KEY)}=${encodeURIComponent(token)}`;
  let options = {path: '/'};
  
  if (user && remember) {
    options['max-age'] = `${MAX_SESSION_DUR}`;
  } else if (!user) {
    options['max-age'] = '-1';
  };

  updatedCookie = Object.keys(options).reduce((accumulator, item) => {
    accumulator+=`; ${item}=${options[item]}`;
    return accumulator;
  }, updatedCookie);
  document.cookie = updatedCookie;
}

function getToken(user) {
  return encodeData({id: user.id, test: getTokenTestString(user)});
}
function verifToken(users, token) {
  const obj = decodeData(token);
  return obj && obj.test && obj.test === getTokenTestString(getUser(users, obj.id));
}
function verifUser(users, data) {
  let foundItems = users.filter(
    item => item.mail === data.mail && item.pass === window.btoa(data.pass)
  )
  return foundItems.length === 1 ? foundItems[0].id : 0;
}
function getUserByToken(users, token) {
  const id = decodeData(token).id;
  return getAllowedUserData(getUser(users, id))
}
function decodeData(encodeString) {
  try {return JSON.parse(window.atob(encodeString));}
  catch {return null;}
}
function encodeData(data) {
  return window.btoa(JSON.stringify(data));
}
function getTokenTestString(user) {
  let output = '', counter = 0;
  let source = window.btoa(user.name + user.surname);
  for (let i = 0; i < source.length; i++) {
    output += source[i] + user.pass[counter];
    if (counter < user.pass.length) {counter++} else {counter = 0}
  }
  return output;
}