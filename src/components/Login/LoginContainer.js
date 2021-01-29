import React from 'react';
import {connect} from 'react-redux';

// import api from '../../api/api';
import thunkCreators from '../../store/thunkCreators/loginThunkCreators';
import Login from './Login';

const mapStateToProps = state => {return {

}};

const LoginContainer = props => {
  return <Login {...props}/>
}
export default connect(mapStateToProps, {...thunkCreators})(LoginContainer);