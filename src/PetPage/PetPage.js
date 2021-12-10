import {Col, Container, Row} from "react-bootstrap";
import PetNotes from "../Notes/PetNotes/PetNotes";
import React, {useEffect, useState} from "react";
import '../Styles/Notes.css'
import '../Styles/PetPage.css'
import PetMenu from "../MainMenu/PetMenu/PetMenu";
import DeleteModal from "../Notes/Modals/DeleteModal/DeleteModal";
import ChangeModal from "../Notes/Modals/ChangeModal/ChangeModal";
import AddModal from "../Notes/Modals/AddModal/AddModal";

export default function PetPage() {

    // Option 1: with props
    // Option 2: with context API

    // TODO: petId from Parent. Here only for test
    const petId = 3;
    const [notes, setNotes] = useState([]);

    // Delete Modal
    const [showDeleteModal, setShowDeleteModel] = useState(false);
    const toggleShowDeleteModal = () => setShowDeleteModel(!showDeleteModal);

    // Change Modal
    const [showChangeModal, setShowChangeModal] = useState(false);
    const [noteToChange, setNoteToChange] = useState();
    const toggleShowChangeModal = (event) => {
        const noteId = Number(event.target.attributes.storage.value);
        notes.map((note) => {
            if (note.id === noteId) {
                setNoteToChange(note);
            }
        })
        setShowChangeModal(!showChangeModal);
    }

    // Add Modal
    const [showAddModal, setShowAddModal] = useState(false);
    const toggleShowAddModal = () => setShowAddModal(!showAddModal);


    useEffect(() => {
        fetch("http://localhost:8080/pets/" + petId + "/notes")
            .then(resp => resp.json())
            .then(data => setNotes(data))
    }, [])


    return (
        <div>
            {
                showAddModal && <AddModal isShow="true" setShow={setShowAddModal} toggleShow={toggleShowAddModal} />
            }
            {
                showChangeModal && <ChangeModal isShow="true" setShow={setShowChangeModal} toggleShow={toggleShowChangeModal} note={noteToChange} />
            }
            {
                showDeleteModal && <DeleteModal isShow="true" setShow={setShowDeleteModel} toggleShow={toggleShowDeleteModal} />
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
                                <PetNotes
                                    getAddModal={toggleShowAddModal}
                                    getChangeModal={toggleShowChangeModal}
                                    getDeleteModal={toggleShowDeleteModal}
                                    notes={notes} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}