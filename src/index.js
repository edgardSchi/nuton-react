
// import $ from 'jquery';
// import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

class Nuton extends React.Component {
  render() {
    return(
        <App />
    );
  }
}


// ========================================

ReactDOM.render(<Nuton />, document.getElementById('root'));
