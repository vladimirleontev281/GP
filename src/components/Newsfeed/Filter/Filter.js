import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import Search from '../../Search/Search';
import Switcher from '../../Switcher/Switcher';

const Filter = (
  {className, setFilterValue, setFilterMethod, value, method, filterMethods, }
) => {
  return <div className={`${className} ${styles.Filter}`} >
    <h3>Filter</h3>
    <p>Select the filter criteria from the bottom and enter the filter value in the input field</p>
    <div>
      <Search extStyles={styles} placeholder={'Enter filter value'} value={value}
              onChangeHandler={setFilterValue} clearForm={() => {setFilterValue('')}}
      />
    </div>
    <div>
      <Switcher extStyles={styles} name={'Select a filter criteria'} items={filterMethods}
                active={method} clickHandler={setFilterMethod}  
      />
    </div>
  </div>
};

Search.Filter = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined]).isRequired]), 
  setFilterValue: PropTypes.func, 
  setFilterMethod: PropTypes.func, 
  value: PropTypes.string, 
  method: PropTypes.string, 
  filterMethods: PropTypes.arrayOf(PropTypes.string),
};

export default Filter;