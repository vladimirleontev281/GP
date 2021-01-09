import baseAPI from './localStorage';
import backendEmulation, {urlObj as URLs, SERVER} from './backendEmulation';

const REQUEST_DELAY = 2000;

export default {
  initBase: () => {
    return !baseAPI.isInit() ? 
      fetch('/source/source.json')
      .then(response => response.json())
      .then(articles => {
        baseAPI.create({articles});
        return true;
      })
    : new Promise(resolve => {resolve(true)})
  },
  getArticles: () => makeRequest(SERVER + URLs.getArticles),
  setArticle: item => makeRequest(SERVER + URLs.setArticle, {
      method: item.id ? 'PUT' : 'POST',
      body: item
  }),
  deleteArticle: id => makeRequest(SERVER + URLs.deleteArticle, {
      method: 'DELETE',
      body: {id}
  }),
};

function makeRequest(url, options) {
  return emulateRequest(url, options, REQUEST_DELAY)
    .then(responseObj => processingResponse(responseObj))
}

function emulateRequest(url, options, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(backendEmulation(url, options))
    }, delay)
  });
}

/* processingResponse for emulations */
async function processingResponse(response) {
  return response;
}

/* processingResponse for real requests */
// async function processingResponse(responseObj) {
//   const response = {ok: responseObj.ok};
//   if (responseObj.ok) {
//     try { response.body = await responseObj.json();}
//     catch (e) { response.body = null; }
//   } else {
//     response.error = getErrorObj(responseObj)
//   }
//   return response;
// }

function getErrorObj(responseObj) {
  // temporarily, there is no error object
  return null;
}