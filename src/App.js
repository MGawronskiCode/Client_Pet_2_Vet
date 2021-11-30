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
            .then(data => console.log(data))
            .then(data => this.setState({ pets: data }))
            .then(console.log('pets data saved in state'));
    }

    displayPets() {
        const pets = this.state.pets;
        console.log(pets);

        return (
            <div>
                bla
            </div>
        );
    }

    render() {
        return (
            <div id="app" className="App">
                {this.displayPets()}
            </div>
        );
    }
}

export default App;
