import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const UserSection = ({className, user, loginClickHandler, logoutClickHandler}) =>{
  return <div className={`${styles.UserSection} ${className}`} >
    {user ? <span>Hi {user.name} :)</span> : null}
    <p>
      <span>Do you want to make a </span>
      {user ? <span>logout</span> : <span>login</span>}
    </p>
  </div>
};

UserSection.propTypes = {

};
export default UserSection;