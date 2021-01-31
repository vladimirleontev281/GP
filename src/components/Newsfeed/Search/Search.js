import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import Button from '../../Button/Button';
import styles from './styles.module.css';

const Search = (props) => {
  const {className, handleSubmit, articles, setSearch, clearSearch} = props;
  return <form  className={`${styles.Search} ${className}`} onSubmit={handleSubmit} >
    <div>
      <Field  className={styles.input} component={'input'} name={'inputField'} placeholder={'Search...'} 
              onChange={(ev, value) => {setSearch({searchString: value, articles})}}
      />
    </div>
    <div>
      <Button className={styles.cleanButton} clickHandler={clearSearch}>
        <span>to clean</span><span>x</span>
      </Button>
    </div>
  </form>
};


Search.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined]).isRequired]),
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.number,
    original: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
    preview: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
    newsLayout: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
    images:PropTypes.shape({
      small: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
      large: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
    }),
  })), 
  handleSubmit: PropTypes.func,
  setSearch: PropTypes.func, 
  clearSearch: PropTypes.func,
};
const ReduxSearch = reduxForm({form: 'Search'})(Search);
export default ReduxSearch;