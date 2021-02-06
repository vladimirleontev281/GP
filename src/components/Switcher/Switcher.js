import React, { useState } from 'react';
import PropTypes from 'prop-types';
import intStyles from './Switcher.module.css';

function Switcher({extStyles, name, items, active, clickHandler, ...props}) {
  const uniqueItems = Array.from(new Set(items));
  const initStateValue = active && uniqueItems.includes(active) ? active : 
    (uniqueItems.length !== 0) ? uniqueItems[0] : null;
  const [value, setValue] = useState(initStateValue);

  const internalClickHandler = e => {
    setValue(e.target.dataset.value);
    clickHandler(e.target.dataset.value);
  };

  return (
    <div className={`${intStyles.Switcher} ${extStyles.Switcher}`}>
      <span className={`${intStyles.descrip} ${extStyles.SwitcherDescrip}`}>{name}&nbsp;{':'}</span>
      <ul className={`${intStyles.list} ${extStyles.SwitcherList}`}>
      {
        uniqueItems.map(item => {
          const active = (item === value) ? intStyles.active : '';
          return <li key={item} className={`${intStyles.item} ${extStyles.SwitcherItem} ${active}`}>
            <button className={'unselectable'} data-value={item} onClick={internalClickHandler}>
              {item}
            </button>
          </li>
        })
      }
      </ul>
    </div>
  )
}

// Switcher.propTypes = {
//   className: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined]).isRequired]), 
//   itemClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined]).isRequired]),
//   descripClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined]).isRequired]),
//   name: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined]).isRequired]),
//   items: PropTypes.arrayOf(PropTypes.string), 
//   active: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined]).isRequired]),
//   clickHandler: PropTypes.func,
// };
export default Switcher;