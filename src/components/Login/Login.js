import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {TextField} from '../fieldsToForms';
import {required, afterTrim} from '../../validators';

import styles from './styles.module.css';
import animate from '../animation/styles.module.css';

const Login = props => {
  const logoAnimation = `${animate.animate__fadeIn} ${animate.animate__slower}`;
  const logoClasses = `${styles.logo} ${animate.animate__animated} ${logoAnimation}`;
  const loginBlockAnimation = `${animate.animate__fadeInLeft} ${animate.animate__fast} ${animate['animate__delay-2s']}`;
  const loginBlockClasses = `${styles.loginBlock} ${animate.animate__animated} ${loginBlockAnimation}`;

  return <div className={styles.Login}>
    <h1 className={logoClasses} >newsfeed</h1>
    <div className={loginBlockClasses} >
      <h2 className={styles.header}>login</h2>
      <form className={styles.formBlock}>
        <Field  name={'mail'} component={TextField} label={'Enter your email'} 
                elem={{tagName: 'input'}} validate={[required, afterTrim]} 
                className={styles.field} styles={styles}
        />
        <Field  name={'pass'} component={TextField} label={'Enter your password'} 
                elem={{tagName: 'input'}} validate={[required, afterTrim]} 
                className={styles.field} styles={styles}
        />
      </form>
    </div>
  </div>
}

const ReduxLoginForm = reduxForm({form: 'LoginForm'})(Login);
export default ReduxLoginForm;
