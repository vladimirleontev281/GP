const BASE_KEY = 'NEWSFEED';
export const KEYS = {
  articles: 'ARTICLES',
};

const getBase = () => JSON.parse(localStorage.getItem(BASE_KEY));
const setBase = value => localStorage.setItem(BASE_KEY, JSON.stringify(value)) 

export default {
  isInit: () => localStorage.getItem(BASE_KEY) ? true : false,
  create: data => setBase({articles: data.articles}),
  get: key => {
    let base = getBase();
    switch (key) {
      case KEYS.articles:
        return base.articles;
      default: return null;
    }
  },
  set: (key, value) => {
    let base = getBase();
    switch (key) {
      case KEYS.articles:
        base.articles = value;
        break;
      default: return null;
    }
    setBase(base);
  },
}

