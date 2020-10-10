import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import FirstComponent from './FirstComponent';
import SecondComponent from './2ndComponent';
import ThirdComponent from './3rdComponent';
import FourthComponent from './4thComponent';
import FifthComponent from './4thComponent';
import SixthComponent from './6thComponent';
import SeventhComponent from './7thComponent';
import EighthComponent from './8thComponent';

ReactDOM.render(
  <React.StrictMode>
    <App />
     
    
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
