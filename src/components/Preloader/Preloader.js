import React from 'react';
import PropTypes from 'prop-types';
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

Preloader.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined]).isRequired]),
  absolute: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf([undefined]).isRequired]),
};
export default Preloader;