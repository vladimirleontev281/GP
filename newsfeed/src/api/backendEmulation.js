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
      let newItem = options.body;
      response.body = options.method === 'PUT' ?
        articles.map(item => (item.id === newItem.id) ? newItem : item)
      : articles.concat(newItem);

      baseAPI.set(baseKeys.articles, response.body)
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

// const emulations = {
//   requestToSetArticle: (anyURL, data) => {
//     return makeRequest('/source/source.json').then(response => {
//       if (data.method === 'POST') newItem.id = getLastID(articles) + 1;

//       response.body = data.method === 'PUT' ? 
//         articles.map(item => (item.id === newItem.id) ? newItem : item)
//       : articles.concat(newItem);
//       return response;
//     })

//     function getLastID(articles) {
//       let sortArray = [...articles].sort((a, b) => {return a.id - b.id});
//       return sortArray[sortArray.length - 1].id;
//     }
//   },
// };