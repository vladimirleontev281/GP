// "mode" is a switch between the main content and two possible modal windows
// 0 - main content, 1 - modal windows to read, 2 - modal window to change/create
const [NEWSFEED, TO_READ, TO_CHANGE] = [0, 1 , 2];
export {NEWSFEED, TO_READ, TO_CHANGE};

const init = {
  mode: NEWSFEED,
  // isLoading: true,
  isLoading: false,
};

const actionTypes = {
  changeMode: 'CHANGE-MODE',
  toggleLoading: 'TOGGLE-LOADING',
};

export const actionCreators = {
  changeMode: (mode) => {return {type: actionTypes.changeMode, mode}},
  toggleLoading: (value) => {return {type: actionTypes.changeMode, data: value}},
};

const globalReducer = (state = init, action) => {
  switch (action.type) {
    case actionTypes.changeMode:
      return {
        ...state,
        mode: action.mode
      };
    case actionTypes.toggleLoading:
      return {
        ...state,
        isLoading: (action.data === undefined) ? !state : action.data
      };
    default:
      return state;
  }
};

export default globalReducer;