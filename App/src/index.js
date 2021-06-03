import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css"
ReactDom.render(
    <Router>
        <App />
    </Router>
, document.getElementById('root'));