import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import {getNewsImagePath} from '../../../utils';
import Button from '../../Button/Button';

import styles from './ModalToRead.module.css';
import animate from '../../animation/animation.module.css';

const ModalToRead = ({className, newsItem, handlerToClose, ...props}) => {
  const {name, newsLayout, original} = newsItem;
  const classes = [
    styles.ModalToRead, className, animate.animate__animated, animate.animate__zoomIn
  ].join(' ');

  return (<div className={classes}>
    <div className={styles.buttonsBlock}>
      <Button className={styles.closeButton} clickHandler={handlerToClose}>close</Button>
      { original ? 
        <a  className={styles.linkToOriginal} href={original} target={'_blank'}>go to original</a>
      : null
      }
    </div>
    <h1 className={styles.newsName}>{name}</h1>
    <div className={styles.imageBlock}>
      <div className={styles.topDecor}>horizontal decorative element</div>
      <div className={styles.centerDecorBox}>
        <div  className={styles.leftDecor}>vertical decorative element</div>
        <div className={styles.imageBox}>
          <img  className={styles.image} 
                src={getNewsImagePath(newsItem, {size: 'large', prefix: props.prefix})}
          />
        </div>
        <div  className={styles.rightDecor}>vertical decorative element</div>
      </div>
      <div className={styles.bottomDecor}>horizontal decorative element</div>
    </div>
    <div className={styles.content}>
      {
        ReactHtmlParser(newsLayout, {
          transform: (node) => {
            if (node.type === 'text' && !node.parent) {
              return ReactHtmlParser(`<p>${node.data.replace(/\n/g, '<br>')}</p>`);
            }
          }
        })
      }
    </div>
  </div>);
};

ModalToRead.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined]).isRequired]),
  newsItem: PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.number,
    original: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
    preview: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
    newsLayout: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
    images:PropTypes.shape({
      small: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
      large: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
    }),
  }), 
  handlerToClose: PropTypes.func,
};
export default ModalToRead;