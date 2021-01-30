const BASE_KEY = 'NEWSFEED';
const VERSION = '1.0.1';
export const KEYS = {
  articles: 'ARTICLES',
  users: 'USERS',
};

const getBase = () => JSON.parse(localStorage.getItem(BASE_KEY));
const setBase = value => localStorage.setItem(BASE_KEY, JSON.stringify(value));

export default {
  isInit: () => {
    let base = getBase();
    return !base || !base.version || base.version !== VERSION ? false : true;
  },
  getActualVersion: () => VERSION,
  create: ({users, articles, version}) => {
    if (users && articles && version) {
      setBase({users, articles, version});
      return true;
    } else {return false;}
  },
  get: key => {
    let base = getBase();
    switch (key) {
      case KEYS.articles:
        return base.articles;
      case KEYS.users:
        return base.users;
      default: return null;
    }
  },
  set: (key, value) => {
    let base = getBase();
    switch (key) {
      case KEYS.articles:
        base.articles = value;
        break;
      case KEYS.users:
        base.users = value;
        break;
      default: return null;
    }
    setBase(base);
  },
}

