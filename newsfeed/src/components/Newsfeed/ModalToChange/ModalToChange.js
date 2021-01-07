import React from 'react';

import {getNewsImagePath} from '../../../utils';

import styles from './styles.module.css';
import animate from '../../animation/styles.module.css';

const ModalToChange = ({newsItem, handlerToClose, ...props}) => {
  const {
    id = null, original = null, name = null, preview = null, content = null
  } = newsItem ? newsItem : {};

  const imagePath = newsItem ? getNewsImagePath(newsItem) : null;

  const classes = [
    styles.ModalToChange, animate.animate__animated, animate.animate__fadeIn
  ].join(' ');

  return <div className={classes}>

  </div>;
};
export default ModalToChange;