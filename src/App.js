import React, {Component} from 'react';
import {MDBContainer} from 'mdb-react-ui-kit';
import {Alert, Button, Navbar, Dropdown, Form} from 'react-bootstrap';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {pets: []};

        this.getPets = this.getPets.bind(this);
    }

    async componentDidMount() {
        const promise = fetch('http://localhost:8080/pets')
            .then(response => response.json());
        promise.then(data => this.setState({pets: data}));
    }

    getPets() {
        return this.state.pets.map((pet, index) => {
            return (
                <tr key={{index}}>
                    <td>{pet.name}</td>
                    <td>{pet.sex}</td>
                    <td>{pet.birthday}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <MDBContainer fluid>
                <Navbar>
                    <Button onClick={alert}>Click me!</Button>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <>
                        <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
                        <Form.Control
                            type="color"
                            id="exampleColorInput"
                            defaultValue="#FF0095"
                            title="Choose your color"/>
                    </>

                    <Form.Control type="text" placeholder="Some input here..."/>

                    <Form>
                        {['checkbox', 'radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label={`default ${type}`}/>
                            </div>
                        ))}
                    </Form>

                    <Form>
                        {['checkbox', 'radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="1"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}/>
                                <Form.Check
                                    inline
                                    label="2"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}/>
                            </div>
                        ))}
                    </Form>

                    <>
                        <Form.Label>Range</Form.Label>
                        <Form.Range/>
                    </>

                </Navbar>
                <Alert id="alert" class="alert alert-danger" hidden>{this.getPets()}</Alert>
            </MDBContainer>
        );
    }
}

function alert() {
    let alertMessage = document.getElementById('alert');
    alertMessage.hidden === true ? alertMessage.removeAttribute('hidden')
        : alertMessage.setAttribute('hidden', 'true');
}

export default App;
