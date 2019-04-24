import React from 'react'
import Topbar from './Topbar.js';
import Footer from './Footer.js';
import { Router, Route, Switch } from 'react-router-dom'
import Main from './Main.js'

class App extends React.Component {

    render() {
        return(
            <div style={{width: '100%', height: '100%'}}>
                <Topbar />
		        <Main />
                <Footer />
            </div>
        );
    }
}

export default App
