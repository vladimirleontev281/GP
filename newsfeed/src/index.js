import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import {Provider} from 'react-redux';
import './index.css';
import App from './App.js';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode><Provider store={store}><App/></Provider></React.StrictMode>,
  rootElement
);
