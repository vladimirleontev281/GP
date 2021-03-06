import React, { useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.css';

const Menu = (props) =>{
  const {
    className, bodyClassName, listClassName, bgOfCloseButton, items, isOpen, clickHandler
  } = props;
  const commonClasses = `${styles.Menu} ${className} `;
  const activationClass = `${isOpen ? styles.open : ''}`;

  const menuRef = useRef(null);
  const onBlurHandler = e => {
    if (!menuRef.current.contains(e.target)) clickHandler(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', onBlurHandler);
    } else {
      document.removeEventListener('click', onBlurHandler)
    }
    return () => {document.removeEventListener('click', onBlurHandler)}
  }, [isOpen])

  return <div className={`${commonClasses} ${activationClass}`} ref={menuRef}>
    <button className={`unselectable ${styles.openButton}`} 
            onClick={e => {if (isOpen) {e.preventDefault()} else {clickHandler(true)}}}
    >
      <div className={styles.decorLine} />
      <div className={styles.decorLine} />
      <div className={styles.decorLine} />
    </button>

    <div  className={`${styles.memuBody} ${bodyClassName} `} >
      <button className={styles.closeButton} onClick={() => {clickHandler(false)}}>
        <img className={styles.background} src={bgOfCloseButton}/>
      </button>
      <ul className={`${styles.list} ${listClassName} `}>
        {items.map((item, index) => <li key={index} className={styles.item}>{item}</li>)}
      </ul>
    </div>
  </div>
};

Menu.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined]).isRequired]),
  bodyClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined]).isRequired]),
  listClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined]).isRequired]),
  bgOfCloseButton: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined]).isRequired]), 
  items:PropTypes.array, 
  isOpen: PropTypes.bool, 
  clickHandler: PropTypes.func,
};
export default Menu;