const init = null;

const actionTypes = {
  setRedirect: 'SET-REDIRECT',
};

// export const actionCreators = {
//   setRedirect: value => {return {type: actionTypes.setRedirect, value}},
// };
export const actionCreator = value => {return {type: actionTypes.setRedirect, value}};

const redirectReducer = (state = init, action) => {
  switch (action.type) {
    case actionTypes.setRedirect: return action.value;
    default: return state;
  }
};

export default redirectReducer;