const REQUEST_DELAY = 2000;

const emulations = {
  requestToSetArticle: (anyURL, data) => {
    return makeRequest('/source/source.json').then(response => {
      let articles = window.getMyState().articles.articles;
      let newItem = data.body;
      if (data.method === 'POST') newItem.id = getLastID(articles) + 1;

      response.body = data.method === 'PUT' ? 
        articles.map(item => (item.id === newItem.id) ? newItem : item)
      : articles.concat(newItem);
      return response;
    })

    function getLastID(articles) {
      let sortArray = [...articles].sort((a, b) => {return a.id - b.id});
      return sortArray[sortArray.length - 1].id;
    }
  },
};

function makeRequest(path, options) {
  return emulateRequest(sendRequest(path, options), REQUEST_DELAY)
    .then(responseObj => processingResponse(responseObj));
}

function sendRequest(path, options) {
  return (!options) ? fetch(path) : fetch(path, options);
}

function emulateRequest(promise, delay){
  return promise.then(response => new Promise(resolve => {
    setTimeout(() => resolve(response), delay)
  }))
}

async function processingResponse(responseObj) {
  const response = {ok: responseObj.ok};
  if (responseObj.ok) {
    try { response.body = await responseObj.json();}
    catch (e) { response.body = null; }
  } else {
    response.error = getErrorObj(responseObj)
  }
  return response;
}

function getErrorObj(responseObj) {
  // temporarily, there is no error object
  return null;
}


export default {
  getArticles: () => {
    return makeRequest('/source/source.json');
  },
  setArticle: (item) => {
    return emulations.requestToSetArticle('url_for_SetArticle', {
      method: item.id ? 'PUT' : 'POST',
      body: item
    });
  }
};
