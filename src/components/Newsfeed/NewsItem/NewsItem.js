import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const NewsItem = (props) => {
  const {
    className, imagePath, prewiev, id, 
    toReadMoreClickHandler, toChangeNewsClickHandler,
  } = props;
  return <li  className={`${className} ${styles.NewsItem}`}>
    <div className={styles.mainBlock}>
      <div className={styles.imageBlock}>
        <img className={styles.image} src={imagePath} />
      </div>
      <div className={styles.contentBlock}>
        <button className={styles.changeButton} onClick={() => toChangeNewsClickHandler(id)}>
          To edit a news item click here.
        </button>
        <p className={styles.prewiev}>{prewiev}</p>
      </div>
    </div>

    <div className={styles.buttonBlock}>
      <button className={`${styles.changeButton} ${styles.mobile}`} 
              onClick={() => toChangeNewsClickHandler(id)}
      >
        Edit
      </button>
      <button className={styles.toReadMoreButton} onClick={() => toReadMoreClickHandler(id)}>
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
  toReadMoreClickHandler: PropTypes.func,
  toChangeNewsClickHandler: PropTypes.func,
};
export default NewsItem;