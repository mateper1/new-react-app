import React , {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App extends Component {
	constructor() {
	super()
	this.state = {
		robots:[],
		searchfield: ''
	}
}

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=> response.json())
		.then(users => this.setState({robots: robots}));
}
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		} )
		if(this.state.robots.length === 0) {
			return <h1>loading</h1>
		}
		else {
	return (
		<div className='tc'>
		<p className="heading">ROBOTS</p>
		<SearchBox className='SearchBox' searchChange={this.onSearchChange} />
		<hr/>
		<Scroll>
			<CardList robots={filteredRobots}/>
		</Scroll>
		</div>
		);
	}
}
}

export default App;