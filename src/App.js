import React, {Component} from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {pets: []};

        this.getPets = this.getPets.bind(this);
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
