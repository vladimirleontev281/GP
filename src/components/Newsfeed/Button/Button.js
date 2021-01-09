import React from 'react';
import styles from './styles.module.css';

const Button = ({className, buttonText, clickHandler, isSubmit, ...props}) =>{
  const classes = `${styles.Button} ${(className) ? className : ''}`;
  const text = buttonText || props.children;

  return isSubmit ? 
    <button type={'submit'} className={classes}>{text}</button>
  :
    <button type={'button'} className={classes} onClick={() => {clickHandler()}}>
      {text}
    </button>
};
export default Button;