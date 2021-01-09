// "mode" is a switch between the main content and two possible modal windows
// 0 - main content, 1 - modal windows to read, 2 - modal window to change/create
export const [NEWSFEED, TO_READ, TO_CHANGE] = [0, 1 , 2];

const init = {
  mode: NEWSFEED,
  isLoading: true,
};

const actionTypes = {
  changeMode: 'CHANGE-MODE',
  toggleLoading: 'TOGGLE-LOADING',
};

export const actionCreators = {
  changeMode: (mode) => {return {type: actionTypes.changeMode, mode}},
  toggleLoading: (value) => {return {type: actionTypes.toggleLoading, data: value}},
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
        isLoading: (action.data === undefined) ? !state.isLoading : action.data
      };
    default:
      return state;
  }
};

export default globalReducer;