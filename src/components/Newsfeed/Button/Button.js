import React from 'react';
import PropTypes from 'prop-types';
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

Button.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined]).isRequired]), 
  buttonText: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined]).isRequired]), 
  clickHandler: PropTypes.func, 
  isSubmit: PropTypes.bool,
};
export default Button;