import {Col, Container, Row} from "react-bootstrap";
import PetNotes from "../Notes/PetNotes/PetNotes";
import React, {useState} from "react";
import '../Styles/Notes.css'
import '../Styles/PetPage.css'
import PetMenu from "../MainMenu/PetMenu/PetMenu";
import DeleteModal from "../Notes/Modals/DeleteModal/DeleteModal";

export default function PetPage() {

    // Option 1: with props
    // Option 2: with context API

    // Delete Modal
    const [showDeleteModal, setShowDeleteModel] = useState(false);
    const toggleShow = () => setShowDeleteModel(!showDeleteModal);


    return (
        <div>
            {
                showDeleteModal && <DeleteModal isShow="true" setShow={setShowDeleteModel} toggleShow={toggleShow} />
            }

            <Container fluid id="container">
                <Row>
                    <Col id="menu" md={2}>
                        <PetMenu />
                    </Col>
                    <Col>
                        <Row id="petData">
                            Pet data
                        </Row>
                        <Row id="historyAndNotes">
                            <Col id="history">
                                History
                            </Col>
                            <Col>
                                <PetNotes getDeleteModal={toggleShow} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}