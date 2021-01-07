import React from 'react';
import styles from './styles.module.css';

const Button = ({className, buttonText, clickHandler, ...props}) =>{
  const classes = `${styles.Button} ${(className) ? className : ''}`;
  const text = props.children|| buttonText;
  return <button className={classes} onClick={() => {clickHandler()}}>{text}</button>
};
export default Button;