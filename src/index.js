import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import {Provider} from 'react-redux';
import './index.css';
import App from './App.js';
import api from './api/api';

const rootElement = document.getElementById('root');

api.initBase().then(() => {
  ReactDOM.render(
    <React.StrictMode><Provider store={store}><App/></Provider></React.StrictMode>,
    rootElement
  );
})

// for emulation
window.getMyState = () => {
  return store.getState();
}
