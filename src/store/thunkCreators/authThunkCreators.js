import { clearSubmitErrors, SubmissionError } from 'redux-form';
import {actionCreators as globalActionCreators} from '../reducers/globalReducer';
import {actionCreator as setRedirect} from '../reducers/redirectReducer';
import api from '../../api/api';

const ERRORS_TEXT = {
  'login-err': {
    _error: 'Authentication error',
    text: 'Invalid username or password',
  },
  'confirm-pass-err': {
    _error: 'Password entry error',
    text: 'The entered values in the "password" field and in the "confirm password" field do not match',
  },
};

const thunkCreators = {
  signIn: formData => dispatch => {
    startSubmitValidation(dispatch, 'LoginForm')
    return api.signIn(formData)
    .then(response => {
      if (!response.body.errors.length) {
        dispatch(setRedirect('/'));
      } else {
        throwError(dispatch, {type: 'login-err'});
      }
    })
  },
  signUp: formData => dispatch => {
    startSubmitValidation(dispatch, 'SignUpForm')
    return new Promise(resolve => {
      if (formData.pass !== formData.confirm) {
        throwError(dispatch, {type: 'confirm-pass-err'})
      } else {
        resolve(api.signUp(formData))
      }
    })
    .then(response => {
      if (!response.body.errors.length) {
        dispatch(setRedirect('/'));
      } else {
        throwError(dispatch, {type: 'signup-server-err', errors: response.body.errors})
      }
    });
  },
};
export default thunkCreators;

function startSubmitValidation(dispatch, form) {
  dispatch(clearSubmitErrors(form));
  dispatch(globalActionCreators.toggleLoading(true));
}

function throwError(dispatch, options) {
  dispatch(globalActionCreators.toggleLoading(false));
  throw new SubmissionError(getErrors(options));
}

function getErrors(options) {
  let errors = {...ERRORS_TEXT[options.type]};
  switch (options.type) {
    case 'login-err':
      errors.mail = errors.pass = errors.text;
      break;
    case 'confirm-pass-err':
      errors.pass = errors.confirm = errors.text;
      break;
    case 'signup-server-err':
      options.errors.forEach(item => {
        errors[item.key] = item.text;
      });
      break;
    default: return null;
  }
  delete errors.text;
  return errors;
}
