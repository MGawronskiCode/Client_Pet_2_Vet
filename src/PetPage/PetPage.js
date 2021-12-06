import {Col, Container, Row} from "react-bootstrap";
import PetNotes from "../Notes/PetNotes/PetNotes";
import React from "react";
import UserMenu from "../MainMenu/UserMenu/UserMenu";
import '../Notes/Notes.css'

export default function PetPage() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col id="menu" md={2}>
                        <UserMenu/>
                    </Col>
                    <Col id="notes">
                        <PetNotes/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}