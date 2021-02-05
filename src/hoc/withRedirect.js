import React from 'react';
import { Redirect } from 'react-router-dom';
import { getPathname } from "../utils";

const withAuthRedirect = InputComponent => props => {
  const pathname = getPathname(props.prefix, props.location.pathname);
  if (props.redirect) {
    //  withRouter from react-router-dom;
    if (pathname !== props.redirect) {
      return <Redirect to={`${props.prefix ? props.prefix : ''}${props.redirect}`}/>
    } else {
      props.setRedirect(null);
    }
  }
  return <InputComponent {...props} />
}
export default withAuthRedirect;