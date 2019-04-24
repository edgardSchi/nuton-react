import React from 'react'

class NotFound extends React.Component {
	render() {
		return(
			<div style={{height: '60vh', margin: '5rem auto', textAlign: 'center', justifyContent: 'center'}}>
				<h1 style={{fontSize: '9rem'}}>404</h1>
				<h1>Seite nicht gefunden</h1>
				<h1>Haben Sie sich verlaufen?</h1>
			</div>
		);
	}
}

export default NotFound
