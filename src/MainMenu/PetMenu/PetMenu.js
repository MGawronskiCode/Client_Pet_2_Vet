import React, {Component} from "react";
import MenuTitle from "../MenuTitle";
import Pets from "../Elements/Pets";
import Veterinarians from "../Elements/Veterinarians";
import FindAVeterinarian from "../Elements/FindAVeterinarian";
import Diet from "../Elements/Diet";
import Calendar from "../Elements/Calendar";
import Feedback from "../Elements/Feedback";
import Settings from "../Elements/Settings";
import {Col, Container, Row} from "react-bootstrap";
import './PetMenu.css'
import PetPanel from '../PetPanel/PetPanel';

export default class PetMenu extends Component {

    // TODO petId from Parent. Here only for test
    petId = 1;

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div id="pet-menu">
                <Container id="pet-menu-container" fluid>
                    <Row>
                        <Col id='left-panel-col' xs={2}>
                            <div id="pet-menu">
                                <MenuTitle title="Menu"/>
                                <Pets/>
                                <Veterinarians/>
                                <FindAVeterinarian/>
                                <Diet petId={this.petId}/>
                                <Calendar/>
                                <div id="bottomElements">
                                    <Feedback />
                                    <Settings />
                                </div>
                            </div>
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
