import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import "./App.css";
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfields: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }
    oneSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }
    render() {
        const { searchfield, robots } = this.state
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.includes(searchfield);
        })
            return !robots.length ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange={this.oneSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
    }
}
export default App;