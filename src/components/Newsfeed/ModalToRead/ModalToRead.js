import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import {getNewsImagePath} from '../../../utils';
import Button from '../Button/Button';

import styles from './styles.module.css';
import animate from '../../animation/styles.module.css';

const ModalToRead = ({className, newsItem, handlerToClose, ...props}) => {
  const {name, newsLayout, original} = newsItem;
  const classes = [
    styles.ModalToRead, className, animate.animate__animated, animate.animate__zoomIn
  ].join(' ');

  return (<div className={classes}>
    <div className={styles.buttonsBlock}>
      { original ? 
        <a  className={styles.linkToOriginal} href={original} target={'_blank'}>go to original</a>
      : null
      }
      
      <Button className={styles.closeButton} clickHandler={handlerToClose}>close</Button>
    </div>
    <h1 className={styles.newsName}>{name}</h1>
    <div className={styles.imageBlock}>
      <div className={styles.topDecor}>horizontal decorative element</div>
      <div className={styles.centerDecorBox}>
        <div  className={styles.leftDecor}>vertical decorative element</div>
        <div className={styles.imageBox}>
          <img className={styles.image} src={getNewsImagePath(newsItem, {size: 'large'})}/>
        </div>
        <div  className={styles.rightDecor}>vertical decorative element</div>
      </div>
      <div className={styles.bottomDecor}>horizontal decorative element</div>
    </div>
    <div className={styles.content}>{ ReactHtmlParser(newsLayout) }</div>
  </div>);
};
export default ModalToRead;