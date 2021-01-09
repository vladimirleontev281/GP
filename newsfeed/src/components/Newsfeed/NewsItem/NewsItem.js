import React from 'react';
import styles from './styles.module.css';

const NewsItem = (
  {
    className, imagePath, prewiev, id, 
    toReadMoreClickHandler, toChangeNewsClickHandler,
    ...props
  }
) => {
  return <li  className={`${className} ${styles.NewsItem}`}>
    <div className={styles.imageBlock}>
      <img className={styles.image} src={imagePath} />
    </div>
    <div>
      <div>
        <button className={styles.changeButton} onClick={() => toChangeNewsClickHandler(id)}>
          To edit a news item click here.
        </button>
      </div>
      <div>
        <p className={styles.prewiev}>{prewiev}</p>
        <div className={styles.buttonBlock}>
          <button className={styles.toReadMoreButton} onClick={() => toReadMoreClickHandler(id)}>
            ... Click here to read more
          </button>
        </div>
      </div>
    </div>
  </li>
};
export default NewsItem;