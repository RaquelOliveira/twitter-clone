import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render () {
		return (
			<div className="App">
				<header className="App-header"> 
					<h1>Header</h1>
				</header>
				<div className="App-profile">
				<h2>profile</h2>
				</div>
				<div className="App-card">
				<h2>Card</h2>
				</div>
				<div className="App-follow">
				<h2>follow</h2>
				</div>
				<div className="App-newCard">
				<h2>new card</h2>
				</div>
			</div>
		);
	}
}

export default App;
