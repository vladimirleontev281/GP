import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';

import {actionCreators as globalActionCreators} from '../../store/reducers/globalReducer';
import {actionCreator as setRedirect} from '../../store/reducers/redirectReducer';
// import api from '../../api/api';
import withRedirect from '../../hoc/withRedirect';
import thunkCreators from '../../store/thunkCreators/loginThunkCreators';
import Login from './Login';

const mapStateToProps = state => {return {
  mainPath: '/login',
  isLoading: state.global.isLoading,
  redirect: state.redirect,
}};

const LoginContainer = ({initLoginForm, toggleLoading, setRedirect, redirect, ...props}) => {
  useEffect(() => {toggleLoading(false)}, []);
  useEffect(() => {initLoginForm({mail: '', pass: '', remember: false});}, []);
  return <Login {...props}/>;
}

export default compose(
  connect(mapStateToProps, {
    toggleLoading: globalActionCreators.toggleLoading,
    setRedirect,
    ...thunkCreators
  }),
  withRedirect
)(LoginContainer);