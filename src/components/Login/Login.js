import React from 'react';
import Preloader from '../Preloader/Preloader';
import LoginForm from './LoginForm/LoginForm';
import styles from './styles.module.css';
import animate from '../animation/styles.module.css';

const Login = ({isLoading, signIn}) => {
  const logoAnimation = `${animate.animate__fadeIn} ${animate.animate__slower}`;
  const logoClasses = `${styles.logo} ${animate.animate__animated} ${logoAnimation}`;
  const loginBlockAnimation = `${animate.animate__fadeInLeft} ${animate.animate__fast} ${animate['animate__delay-2s']}`;
  const loginBlockClasses = `${styles.loginBlock} ${animate.animate__animated} ${loginBlockAnimation}`;

  return <div className={styles.Login}>
    <h1 className={`unselectable ${logoClasses}`}>newsfeed</h1>
    <div className={loginBlockClasses} >
      <h2 className={`unselectable ${styles.header}`}>sign in</h2>
      <LoginForm onSubmit={signIn} />
    </div>
    {isLoading ? <Preloader className={styles.Preloader} absolute /> : null}
  </div>
}
export default Login;
