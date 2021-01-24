import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Menu = ({className, memuBody, listClassName, bgOfCloseButton, items, isOpen, clickHandler}) =>{
  const commonClasses = `${styles.Menu} ${className} `;
  const activationClass = `${isOpen ? styles.open : ''}`;
  const classes = `${commonClasses} ${activationClass}`;

  return <div className={`${classes}`} >
    <button className={styles.openButton} 
            onClick={e => {if (isOpen) {e.preventDefault()} else {clickHandler(true)}}}
    >
      <div className={styles.decorLine} />
      <div className={styles.decorLine} />
      <div className={styles.decorLine} />
    </button>

    <div className={`${styles.memuBody} ${memuBody} `}>
        <button className={styles.closeButton} onClick={() => {clickHandler(false)}}>
          <img className={styles.background} src={bgOfCloseButton}/>
        </button>
        <ul className={`${styles.list} ${listClassName} `}>
          {items.map((item, index) => <li key={index} className={styles.item}>{item}</li>)}
        </ul>
    </div>
  </div>
};

Menu.propTypes = {

};
export default Menu;