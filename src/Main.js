import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import MainPage from './MainPage.js'
import Download from './Download.js'
import NotFound from './NotFound.js'

class Main extends React.Component {

	render() {
		return(
			<Router>
			<div style={{height: '100%', padding: '0', margin: '0'}}>
				<Switch>
					<Route exact path="/" component={MainPage} />
					<Route path="/download" component={Download} />
					<Route component={NotFound} />
				</Switch>
			</div>
			</Router>
		
		);
	}

}

export default Main
