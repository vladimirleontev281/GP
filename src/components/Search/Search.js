import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import intStyles from './Search.module.css';

const Search = ({className, extStyles, placeholder, value, onChangeHandler, clearForm}) => {
  const styles = extStyles || intStyles;
  return <div className={`${className} ${styles.Search}`}>
    <div>
      <input  className={styles.input} placeholder={placeholder} value={value}
              onChange={e => {onChangeHandler(e.target.value)}}
      />
    </div>
    <div>
      <Button className={styles.cleanButton} clickHandler={clearForm}>
        <span>to clean</span><span>x</span>
      </Button>
    </div>
  </div>
};


Search.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined]).isRequired]), 
  extStyles: PropTypes.object, 
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined]).isRequired]),
  value: PropTypes.string, 
  onChangeHandler: PropTypes.func, 
  clearForm: PropTypes.func,
};

export default Search;