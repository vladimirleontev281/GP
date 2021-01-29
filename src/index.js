import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store/store';
import {Provider} from 'react-redux';
import './index.css';
import App from './App.js';
import api from './api/api';

const rootElement = document.getElementById('root');

api.initBase().then(DBWasInit => {
  let output = DBWasInit ? 
    <React.StrictMode><Router><Provider store={store}><App/></Provider></Router></React.StrictMode>
  : <p>no base. Sorry</p>;
  ReactDOM.render(output, rootElement);
});

// for tests
window.getMyState = () => {
  return store.getState();
}