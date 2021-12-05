import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = { loading: false, pets: [] };


    constructor(props, context, state) {
        super(props, context);
        this.state = state;
    }

    componentDidMount() {
        fetch('http://localhost:8080/pets')
            .then(response => response.json())
            // eslint-disable-next-line no-console
            .then(data => this.setState({ pets: data }))
    }

    render() {
        return (
            <div id="app" className="App">
                {this.state.pets.map(pets => pets.name)}
            </div>
        );
    }
}

export default App;
