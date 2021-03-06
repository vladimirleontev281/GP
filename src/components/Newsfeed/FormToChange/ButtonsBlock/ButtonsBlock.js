import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../Button/Button';

import styles from '../FormToChange.module.css';


const ButtonsBlock = ({id, handlerToClose, handlerToDelete, others, ...props}) => {
  return <div className={styles.buttonsBlock} >
    <Button className={styles.closeButton} clickHandler={handlerToClose}>
      <span>Close without saving</span><span>Close</span>
    </Button>
    { 
      id ?  <Button className={styles.deleteButton} clickHandler={() => handlerToDelete(id)}>
              <span>Delete this news</span><span>Delete</span>
            </Button>
      : null
    }
    <Button className={styles.submitButton} isSubmit>{id ? 'change' : 'create'}</Button>
  </div>
};

ButtonsBlock.propTypes = {
  id: PropTypes.number, 
  handlerToClose: PropTypes.func, 
  handlerToDelete: PropTypes.func, 
  others: PropTypes.object,
};

export default ButtonsBlock;

