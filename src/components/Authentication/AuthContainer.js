import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { compose } from 'redux';

import { getPathname } from "../../utils";
import {actionCreators as globalActionCreators} from '../../store/reducers/globalReducer';
import {actionCreator as setRedirect} from '../../store/reducers/redirectReducer';
import withRedirect from '../../hoc/withRedirect';
import thunkCreators from '../../store/thunkCreators/authThunkCreators';
import commonThunkCreators from '../../store/thunkCreators/commonThunkCreators';
import Auth from './Auth';

const mapStateToProps = state => {return {
  isLoading: state.global.isLoading,
  redirect: state.redirect,
  loginForm: state.form.LoginForm,
  signUpForm: state.form.SignUpForm,
}};

const AuthContainer = ({initForm, toggleLoading, ...props}) => {
  const locationName = getPathname(props.prefix, props.location.pathname);
  useEffect(() => {toggleLoading(false)}, []);
  useEffect(() => {
    let initFormData = locationName === '/login' ? 
      {form: 'LoginForm', fields: {mail: '', pass: '', remember: false}}
    : {form: 'SignUpForm', fields: {name: '', surname: '', mail: '', pass: '', confirm: ''}};
    initForm(initFormData.form, initFormData.fields);
  }, [locationName]);
  return <Auth locationName={locationName} {...props} />;
}

export default compose(
  connect(mapStateToProps, {
    toggleLoading: globalActionCreators.toggleLoading,
    setRedirect,
    ...thunkCreators,
    ...commonThunkCreators,
  }),
  withRouter,
  withRedirect
)(AuthContainer);