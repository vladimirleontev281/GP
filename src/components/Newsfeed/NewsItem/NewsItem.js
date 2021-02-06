import React from 'react';
import PropTypes from 'prop-types';
import {TO_READ, TO_CHANGE} from '../../../store/reducers/globalReducer';
import {getDateString} from '../../../utils';
import styles from './NewsItem.module.css';

const NewsItem = (props) => {
  const {className, id, imagePath, prewiev, owner, date, activeUser, activateModal} = props;
  return <li  className={`${className} ${styles.NewsItem}`}>
    <div className={styles.mainBlock}>
      <div className={styles.contentWraper}>
        <div className={styles.imageBlock}>
          <img className={styles.image} src={imagePath} />
        </div>
        <div className={styles.contentBlock}>
          <div className={styles.details} >
            {
            activeUser && activeUser === owner.id ?
            <button className={styles.changeButton} onClick={() => activateModal(id, TO_CHANGE)}>
              To edit a news item click here.
            </button> : <span></span>
            }
            <div className={styles.info}>
              <span>{owner.name} {owner.surname}</span>
              <span>{getDateString(date)}</span>
            </div>
            
          </div>
          <p className={styles.prewiev}>{prewiev}</p>
        </div>
      </div>
    </div>

    <div className={styles.buttonBlock}>
      {
      activeUser && activeUser === owner.id ?
      <button className={`${styles.changeButton} ${styles.mobile}`} 
              onClick={() => activateModal(id, TO_CHANGE)}
      >
        Edit
      </button> : <span></span>
      }
      <button className={styles.toReadMoreButton} onClick={() => activateModal(id, TO_READ)}>
        ... Click here to read more
      </button>
    </div>
    <div className={styles.infoMobile}>
      <span>{owner.name} {owner.surname}</span>
      <span>{getDateString(date)}</span>
    </div>
  </li>
};

NewsItem.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined]).isRequired]),
  imagePath: PropTypes.string, 
  prewiev: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]), 
  id: PropTypes.number, 
  date: PropTypes.number,
  activateModal: PropTypes.func,
};
export default NewsItem;