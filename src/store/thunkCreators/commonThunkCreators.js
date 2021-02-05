import { initialize as initializeReduxForm } from 'redux-form';

const thunkCreators = {
  initForm: (name, data) => dispatch => {
    dispatch(initializeReduxForm(name, data));
  },
};
export default thunkCreators;