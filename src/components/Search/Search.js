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


// Search.propTypes = {
//   className: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined]).isRequired]),
//   searchBase: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number,
//     date: PropTypes.number,
//     original: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
//     name: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
//     preview: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
//     newsLayout: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
//     images:PropTypes.shape({
//       small: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
//       large: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
//     }),
//   })), 
//   handleSubmit: PropTypes.func,
//   setSearch: PropTypes.func, 
//   clearSearch: PropTypes.func,
// };

export default Search;