import {Col, Container, Row} from "react-bootstrap";
import PetNotes from "../Notes/PetNotes/PetNotes";
import React from "react";
import '../Styles/Notes.css'
import '../Styles/PetPage.css'
import PetMenu from "../MainMenu/PetMenu/PetMenu";

export default function PetPage() {
    return (
        <div>
            <Container fluid id="container">
                <Row>
                    <Col id="menu" md={2}>
                        <PetMenu/>
                    </Col>
                    <Col>
                        <Row id="petData">
                            Pet data
                        </Row>
                        <Row id="historyAndNotes">
                            <Col id="history">
                                History
                            </Col>
                            <Col id="notes">
                                <PetNotes/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}