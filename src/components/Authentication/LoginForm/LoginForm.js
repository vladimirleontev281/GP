import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {TextField, CheckBox} from '../../fieldsToForms';
import {required, afterTrim, email} from '../../../validators';
import Button from '../../Button/Button';
import styles from '../Authentication.module.css';

const LoginForm = ({handleSubmit}) => {
  return <form className={styles.formBlock} onSubmit={handleSubmit}>
    <Field  name={'mail'} component={TextField} label={'Enter your email'} 
            elem={{tagName: 'input'}} validate={[required, afterTrim, email]} 
            className={styles.textField} styles={styles}
    />
    <Field  name={'pass'} component={TextField} label={'Enter your password'} 
            elem={{tagName: 'input', type: 'password'}} validate={[required, afterTrim]} 
            className={styles.textField} styles={styles}
    />
    <div className={styles.optionsBlock}>
      <Field  name={'remember'} component={CheckBox} label={'Remember me'} 
              className={styles.checkboxContainer} styles={styles}
      />
      <Button className={styles.submitButton} isSubmit>sign in</Button>
    </div>
  </form>
}
const ReduxLoginForm = reduxForm({form: 'LoginForm'})(LoginForm);
export default ReduxLoginForm;