import React, { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';

import Button from '../Button/Button';
import Preloader from '../../Preloader/Preloader';

import styles from './styles.module.css';
import animate from '../../animation/styles.module.css';

const FormToChange = (
  {className, newsItem, initForm, handlerToClose, handlerToDelete, handleSubmit, isLoading, ...props}
) => {
  const {
    id = null, original = null, name = null, preview = null, newsLayout = null
  } = newsItem ? newsItem : {};

  const initFormData = {
    id, name, preview, original, newsLayout, 
    smallImage: newsItem ? newsItem.images.small : null,
    largeImage: newsItem ? newsItem.images.large : null,
  };

  const classes = [
    styles.FormToChange, className, animate.animate__animated, animate.animate__fadeIn
  ].join(' ');

  useEffect(() => {initForm(initFormData);}, []);

  return <form className={classes} onSubmit={handleSubmit} >
    {isLoading ? <Preloader absolute /> : null}

    <div className={styles.imageBlock} >
      <Field className={styles.infoInput} component={'input'} name={'id'} disabled/>
      <div>
        <span className={styles.fieldDescrip}>Path of small image of News</span>
        <Field className={styles.input} component={'input'} name={'smallImage'}/>
      </div>
      <div>
        <span className={styles.fieldDescrip}>Path of large image of News</span>
        <Field className={styles.input} component={'input'} name={'largeImage'}/>
      </div>
    </div>
    <div className={styles.detailsBlock} >
      <div>
        <span className={styles.fieldDescrip}>News headline</span>
        <Field className={styles.input} component={'input'} name={'name'}/>
      </div>
      <div>
        <span className={styles.fieldDescrip}>News preview</span>
        <Field className={styles.input} component={'input'} name={'preview'}/>
      </div>
      <div>
        <span className={styles.fieldDescrip}>Link to original</span>
        <Field className={styles.input} component={'input'} name={'original'}/>
      </div>
    </div>
    <div className={styles.layoutBlock} >
      <span className={styles.fieldDescrip}>News layout</span>
      <Field  className={styles.textarea} component={'textarea'} name={'newsLayout'} />
    </div>
    <div className={styles.buttonsBlock} >
      <Button className={styles.closeButton} clickHandler={handlerToClose}>
        <span>Close without saving</span><span>Close</span>
      </Button>
      { 
        id ?  <Button className={styles.deleteButton} clickHandler={() => handlerToDelete(id)}>
                <span>Delete this news</span><span>Delete</span>
              </Button>
        : null
      }
      <Button className={styles.submitButton} isSubmit>
        {newsItem ? 'change' : 'create'}
      </Button>
    </div>
  </form>;
};

const ReduxFormToChange = reduxForm({form: 'FormToChange'})(FormToChange);
export default ReduxFormToChange;