import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import Scroll from './Scroll'
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
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.includes(this.state.searchfield);
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
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
}
export default App;