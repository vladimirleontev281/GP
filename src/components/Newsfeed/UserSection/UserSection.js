import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './UserSection.module.css';

const UserSection = ({className, user, logoutClickHandler, closeMenu, setRedirect}) =>{
  const redirectTo = (e, path) => {e.preventDefault(); closeMenu(); setRedirect(path)}
  return <div className={`${styles.UserSection} ${className}`} >
    {user ? <span>Hi {user.name} :)</span> : null}
    <p>
      <span>Do you want to </span>
      {user ? 
        <>
          <a onClick={logoutClickHandler}>logout</a>
          <span> or </span>
          <NavLink to={'./login'} onClick={e => {logoutClickHandler(e, '/login')}}>re-login</NavLink>
        </>
      : <NavLink to={'./login'} onClick={e => {redirectTo(e, '/login')}}>login</NavLink>
      }
    </p>
  </div>
};

UserSection.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined]).isRequired]),
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    surname: PropTypes.string
  }), 
  logoutClickHandler: PropTypes.func, 
  closeMenu: PropTypes.func,
  setRedirect: PropTypes.func,
};
export default UserSection;