import React, {useState, useEffect} from 'react';
import Filter from './Filter';

const FilterContainer = ({setFilter, removeFilter, ...props}) => {
  const FILTER_TYPE = 'filter';
  let [filterMethod, setFilterMethod] = useState(props.filterMethods[0]);
  let [filterValue, setFilterValue] = useState('');

  const filterChanger = () => {
    setFilter({type: FILTER_TYPE, method: filterMethod, value: filterValue});
  };
  const filterRemover = () => {
    removeFilter({type: FILTER_TYPE});
  };
  const refresh = () => {
    if (filterValue) {filterChanger()} else {filterRemover()};
  };

  useEffect(() => refresh(), [filterValue]);
  useEffect(() => refresh(), [filterMethod]);

  const toSend = { ...props,
    setFilterValue, setFilterMethod,
    value: filterValue, method: filterMethod,
  };

  return <Filter {...toSend} />
};
export default FilterContainer;