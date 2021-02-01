import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuthRedirect = InputComponent => props => {
  if (props.redirect) {
    //  withRouter from react-router-dom;
    if (props.location.pathname !== props.redirect) {
      return <Redirect to={props.redirect}/>
    } else {
      props.setRedirect(null);
    }
  }
  return <InputComponent {...props} />
}
export default withAuthRedirect;