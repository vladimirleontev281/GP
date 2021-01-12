import React from 'react';
import PropTypes from 'prop-types';
import {TO_READ, TO_CHANGE} from '../../../store/reducers/globalReducer';
import styles from './styles.module.css';

const NewsItem = (props) => {
  const {className, imagePath, prewiev, id, activateModal} = props;
  return <li  className={`${className} ${styles.NewsItem}`}>
    <div className={styles.mainBlock}>
      <div className={styles.imageBlock}>
        <img className={styles.image} src={imagePath} />
      </div>
      <div className={styles.contentBlock}>
        <button className={styles.changeButton} onClick={() => activateModal(id, TO_CHANGE)}>
          To edit a news item click here.
        </button>
        <p className={styles.prewiev}>{prewiev}</p>
      </div>
    </div>

    <div className={styles.buttonBlock}>
      <button className={`${styles.changeButton} ${styles.mobile}`} 
              onClick={() => activateModal(id, TO_CHANGE)}
      >
        Edit
      </button>
      <button className={styles.toReadMoreButton} onClick={() => activateModal(id, TO_READ)}>
        ... Click here to read more
      </button>
    </div>
  </li>
};

NewsItem.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined]).isRequired]),
  imagePath: PropTypes.string, 
  prewiev: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]), 
  id: PropTypes.number, 
  activateModal: PropTypes.func,
};
export default NewsItem;