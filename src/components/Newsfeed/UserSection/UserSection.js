import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const UserSection = ({className, user, loginClickHandler, logoutClickHandler}) =>{
  return <div className={`${styles.UserSection} ${className}`} >
    {user ? <span>Hi {user.name} :)</span> : null}
    <p>
      <span>Do you want to </span>
      {user ? 
        <a onClick={e => {e.preventDefault(); logoutClickHandler()}}>logout</a> : 
        <NavLink to={'/login'}>login</NavLink>
      }
    </p>
  </div>
};

UserSection.propTypes = {

};
export default UserSection;

/*
<NavLink to={`${item.href}`} activeClassName={styles.active}>
  {item.text}
</NavLink>

*/