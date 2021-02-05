import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {TextField} from '../../fieldsToForms';
import {required, afterTrim, email} from '../../../validators';
import Button from '../../Button/Button';
import styles from '../styles.module.css';

const SignUpForm = ({handleSubmit, setRedirect, ...props}) => {
  return <form className={styles.formBlock} onSubmit={handleSubmit}>
    <Field  name={'name'} component={TextField} label={'Enter your name'} 
            elem={{tagName: 'input'}} validate={[required, afterTrim]} 
            className={styles.textField} styles={styles}
    />
    <Field  name={'surname'} component={TextField} label={'Enter your surname'} 
            elem={{tagName: 'input'}} validate={[required, afterTrim]} 
            className={styles.textField} styles={styles}
    />
    <Field  name={'mail'} component={TextField} label={'Enter your email'} 
            elem={{tagName: 'input'}} validate={[required, afterTrim, email]} 
            className={styles.textField} styles={styles}
    />
    <Field  name={'pass'} component={TextField} label={'Enter your password'} 
            elem={{tagName: 'input', type: 'password'}} validate={[required, afterTrim]} 
            className={styles.textField} styles={styles}
    />
    <Field  name={'confirm'} component={TextField} label={'Confirm your password'} 
            elem={{tagName: 'input', type: 'password'}} validate={[required, afterTrim]} 
            className={styles.textField} styles={styles}
    />
    <div className={styles.buttonsBlock}>
      <Button className={styles.backButton} clickHandler={() => {setRedirect('/login')}}>
        back
      </Button>
      <Button className={styles.submitButton} isSubmit>create</Button>
    </div>
  </form>
}
const ReduxSignUpForm = reduxForm({form: 'SignUpForm'})(SignUpForm);
export default ReduxSignUpForm;