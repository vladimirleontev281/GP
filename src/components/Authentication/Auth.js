import React from 'react';
import PropTypes from 'prop-types';
import Preloader from '../Preloader/Preloader';
import LoginForm from './LoginForm/LoginForm';
import styles from './Authentication.module.css';
import animate from '../animation/animation.module.css';
import SignUpForm from './SignUpForm/SignUpForm';

const Auth = ({isLoading, locationName, signIn, signUp, setRedirect, ...props}) => {
  const logoAnimation = `${animate.animate__fadeIn} ${animate.animate__slower}`;
  const logoClasses = `${styles.logo} ${animate.animate__animated} ${logoAnimation}`;
  const animationType = locationName === '/login' ? 
    animate.animate__fadeInLeft : animate.animate__fadeIn;
  const authBlockAnimation = `${animationType} ${animate.animate__fast} ${animate['animate__delay-2s']}`;
  const authBlockClasses = `${styles.authBlock} ${animate.animate__animated} ${authBlockAnimation}`;
  

  return <div className={styles.Authentication}>
    <h1 className={`unselectable ${logoClasses}`}>newsfeed</h1>
    <div className={authBlockClasses} >
      <h2 className={`unselectable ${styles.header}`}>
        {locationName === '/login' ? 'sign in' : 'sign up'}
      </h2>
      {locationName === '/login' ? 
        <>
          <LoginForm onSubmit={signIn} />
          <p className={styles.footer}>
            <span>If you don't have an account, you can </span>
            <a href={'./signup'} onClick={e=>{e.preventDefault(); setRedirect('/signup')}}>
              sign up here
            </a>
          </p>
        </>
      : <SignUpForm onSubmit={signUp} setRedirect={setRedirect} />
      }
    </div>
    {isLoading ? <Preloader className={styles.Preloader} absolute /> : null}
  </div>
}

Auth.propTypes = {

  isLoading: PropTypes.bool, 
  locationName: PropTypes.string, 
  signIn: PropTypes.func, 
  signUp: PropTypes.func, 
  setRedirect: PropTypes.func,
};
export default Auth;
