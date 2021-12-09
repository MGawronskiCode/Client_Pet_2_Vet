import React, { Component } from 'react';
import MenuContainer from './MenuContainer';
import { Col, Container, Row } from 'react-bootstrap';
import PetPanel from '../PetPanel/PetPanel';
import './PetMenu.css'

// eslint-disable-next-line react/prefer-stateless-function
export default class PetMenu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="pet-menu">
                <Container id="pet-menu-container" fluid>
                    <Row>
                        <Col id='left-panel-col' xs={2}>
                            <MenuContainer/>
                        </Col>
                        <Col id = 'main-content-col'>
                            <Row id='top-navbar-row'>
                                top navbar
                            </Row>
                            <Row id='pet-panel-row'>
                                <PetPanel />
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}
