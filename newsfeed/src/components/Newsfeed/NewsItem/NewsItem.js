import React from 'react';
import styles from './styles.module.css';

const NewsItem = (
  {
    className, imagePath, prewiev, id, 
    toReadMoreClickHandle, toChangeNewsClickHandle,
    ...props
  }
) => {
  return <li  className={`${className} ${styles.NewsItem}`} 
              onDoubleClick={() => toChangeNewsClickHandle(id)}
  >
    <div className={styles.imageBlock}>
      <img className={styles.image} src={imagePath} />
    </div>
    <div>
      <p className={styles.info}>To edit a news item double click on it.</p>
      <div>
        <p className={styles.prewiev}>{prewiev}</p>
        <div className={styles.buttonBlock}>
          <button className={styles.toReadMoreButton} onClick={() => toReadMoreClickHandle(id)}>
            ... click her to read more
          </button>
        </div>
      </div>
    </div>
  </li>
};
export default NewsItem;