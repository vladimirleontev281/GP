import React, { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import Preloader from '../../Preloader/Preloader';
import {TextField} from '../../fieldsToForms';
import {required, afterTrim} from '../../../validators';
import ImageBlock from './ImageBlock/ImageBlock';
import ButtonsBlock from './ButtonsBlock/ButtonsBlock';

import styles from './styles.module.css';
import animate from '../../animation/styles.module.css';


const FormToChange = (props) => {
  // input data
  const {
    className, newsItem, isLoading,
    initForm, handlerToClose, handlerToDelete, handleSubmit,
  } = props;

  // item
  const {
    id = null, original = null, name = null, preview = null, newsLayout = null
  } = newsItem ? newsItem : {};

  // for init form
  const initFormData = {
    id, name, preview, original, newsLayout, 
    smallImage: newsItem ? newsItem.images.small : null,
    largeImage: newsItem ? newsItem.images.large : null,
  };

  // styles
  const classes = [
    styles.FormToChange, className, animate.animate__animated, animate.animate__fadeIn
  ].join(' ');

  useEffect(() => {initForm(initFormData);}, []);

  return <form className={classes} onSubmit={handleSubmit} >
    {isLoading ? <Preloader absolute /> : null}

    <Field className={styles.infoInput} component={'input'} name={'id'} disabled/>
    <ImageBlock/>
    <div className={styles.detailsBlock} >
      <Field  name={'name'} component={TextField} label={'News headline'} elem={{tagName: 'input'}}
              validate={[required, afterTrim]} styles={styles}
      />
      <Field  name={'preview'} component={TextField} label={'News preview'} elem={{tagName: 'input'}}
              validate={[required, afterTrim]} styles={styles}
      />
      <Field  name={'original'} component={TextField} label={'Link to original'} 
              elem={{tagName: 'input'}} validate={[afterTrim]} styles={styles}
      />
    </div>
    <div className={styles.layoutBlock} >
      <Field  name={'newsLayout'} component={TextField} label={'News layout'} styles={styles}
              elem={{tagName: 'textarea'}} validate={[required, afterTrim]}
      />
    </div>
    <ButtonsBlock id={id} handlerToClose={handlerToClose} handlerToDelete={handlerToDelete}/>
  </form>;
};


FormToChange.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined]).isRequired]), 
  newsItem: PropTypes.oneOfType([PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null]).isRequired]),
    date: PropTypes.number,
    original: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
    preview: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
    newsLayout: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
    images:PropTypes.shape({
      small: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
      large: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
    }),
  }), PropTypes.oneOf([null]).isRequired]),
  isLoading: PropTypes.bool,
  initForm: PropTypes.func, 
  handlerToClose: PropTypes.func,
  handlerToDelete: PropTypes.func,
  handleSubmit: PropTypes.func,
};
const ReduxFormToChange = reduxForm({form: 'FormToChange'})(FormToChange);
export default ReduxFormToChange;