import { initialize as initializeReduxForm, SubmissionError } from 'redux-form';
import {actionCreators as globalActionCreators} from '../reducers/globalReducer';
import {actionCreator as setRedirect} from '../reducers/redirectReducer';
import api from '../../api/api';

const thunkCreators = {
  initLoginForm: data => dispatch => {
    dispatch(initializeReduxForm('LoginForm', data));
  },
  signIn: (formData) => dispatch => {
    dispatch(globalActionCreators.toggleLoading(true));
    return new Promise((resolve, reject) => {
      api.signIn(formData).then(response => {
        if (!response.body.errors.length) {
          dispatch(setRedirect('/'));
          resolve(undefined);
        } else {
          const ERROR_TEXT = response.body.errors[0];
          const errors = {_error: ERROR_TEXT, mail: ERROR_TEXT, pass: ERROR_TEXT};
          dispatch(globalActionCreators.toggleLoading(false));
          reject(new SubmissionError(errors));
        }
      })
    });
  },
};
export default thunkCreators;