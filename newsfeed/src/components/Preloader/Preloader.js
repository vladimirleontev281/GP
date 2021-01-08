import React from 'react';
import styles from './styles.module.css';

function Preloader({className, absolute}) {
  return (
    <div className={`${styles.Preloader} ${className} ${(absolute) ? styles.absolute : ''}`}>
      <div className={styles.background} >
        <div className={styles.container} >
          <div className={styles.elem}></div>
          <div className={styles.elem}></div>
          <div className={styles.elem}></div>
          <div className={styles.elem}></div>
          <div className={styles.elem}></div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;