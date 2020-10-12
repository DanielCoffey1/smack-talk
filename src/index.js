import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';
import { Redirect } from 'react-router';

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyBZQiAe7bRyJv8PPgyOVv2AsmL2Dl08Djo",
  authDomain: "smack-talk-c3687.firebaseapp.com",
  databaseURL: "https://smack-talk-c3687.firebaseio.com",
  projectId: "smack-talk-c3687",
  storageBucket: "smack-talk-c3687.appspot.com",
  messagingSenderId: "393099184818",
  appId: "1:393099184818:web:f8a1932fbff0db2f1717ab",
  measurementId: "G-D61R59EZ1W"
});

const  routing = (
  <Router>
    <div id='routing-container'>
      <Route path="/"> <Redirect to='/login' /></Route>
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
);


ReactDOM.render(routing, document.getElementById('root'));

