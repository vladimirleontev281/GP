import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuthRedirect = InputComponent => props => {
  const main = props.mainPath;
  const redirect = props.redirect;

  if (redirect && redirect !== main) {
    return <Redirect to={props.redirect}/>
  } else if (redirect && redirect === main) {
    props.setRedirect(null);
  }
  return <InputComponent {...props} />
}
export default withAuthRedirect;