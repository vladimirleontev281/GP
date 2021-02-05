import baseAPI from './localStorage';

export default function() {
  return baseAPI.isInit() ? 
    new Promise(resolve => {resolve(true)})
  : Promise.all([
      fetch('./source/defaultUsers.json'), 
      fetch('./source/defaultArticles.json'),
      baseAPI.getActualVersion()
    ])
    .then(responses => (responses[0].ok && responses[1].ok ? 
      Promise.all([responses[0].json(), responses[1].json(), responses[2]]) : false
    ))
    .catch(() => false)
    .then(responses => (!responses ? false : 
      baseAPI.create({users: responses[0], articles: responses[1], version: responses[2]})
    ));
}