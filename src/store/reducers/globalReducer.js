// "mode" is a switch between the main content and two possible modal windows
// 0 - main content, 1 - modal windows to read, 2 - modal window to change/create
export const [NEWSFEED, TO_READ, TO_CHANGE] = [0, 1 , 2];
export const sortKeys = {
  dateUp: 'DATE-UP',
  dateDown: 'DATE-DOWN',
};
export const referenceObjForSort = {
  'date up': sortKeys.dateUp,
  'date down': sortKeys.dateDown,
};
const init = {
  mode: NEWSFEED,
  isLoading: true,
  sortVariant: sortKeys.dateDown,
  isMenuOpen: false,
};
export const DEFAULT_SORT_DESCRIP = 'date down';

const actionTypes = {
  changeMode: 'CHANGE-MODE',
  toggleLoading: 'TOGGLE-LOADING',
  setSort: 'SET-SORT',
  setMenuOpen: 'SET-MENU-OPEN',
};

export const actionCreators = {
  changeMode: mode => {return {type: actionTypes.changeMode, mode}},
  toggleLoading: value => {return {type: actionTypes.toggleLoading, value}},
  setSort: value => {return {type: actionTypes.setSort, value}},
  setMenuOpen: value => {return {type: actionTypes.setMenuOpen, value}},
};

const globalReducer = (state = init, action) => {
  switch (action.type) {
    case actionTypes.changeMode: return {...state, mode: action.mode};
    case actionTypes.toggleLoading: return { ...state,
      isLoading: (action.value === undefined) ? !state.isLoading : action.value
    };
    case actionTypes.setSort: return {...state, sortVariant: action.value};
    case actionTypes.setMenuOpen: return {...state, 
      isMenuOpen: (action.value === undefined) ? !state.isMenuOpen : action.value
    };
    default: return state;
  }
};

export default globalReducer;