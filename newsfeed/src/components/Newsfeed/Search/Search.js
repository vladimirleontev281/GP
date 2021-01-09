import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Button from '../Button/Button';


import styles from './styles.module.css';

const Search = ({className, handleSubmit, articles, setSearch, clearSearch, ...props}) => {
  return <form  className={`${styles.Search} ${className}`} onSubmit={handleSubmit} >
    <div>
      <Field  className={styles.input} component={'input'} name={'inputField'} placeholder={'Search...'} 
              onChange={(ev, value) => {setSearch({searchString: value, articles})}}
      />
    </div>
    <div>
      <Button className={styles.cleanButton} clickHandler={clearSearch}>
        to clean
      </Button>
    </div>
  </form>
};

const ReduxSearch = reduxForm({form: 'Search'})(Search);
export default ReduxSearch;