import {Col, Container, Row} from "react-bootstrap";
import PetNotes from "../components/PetNotes";
import React, {useContext, useState} from "react";
import '../assets/styles/View.css';
import '../assets/styles/Card.css';
import DeleteModal from "../components/DeleteModal";
import ChangeNoteModal from "../components/ChangeNoteModal";
import AddModal from "../components/AddModal";
import PetPanel from "../components/PetPanel";
import History from "../components/History";
import {PageContext} from "../App";
import ChangePetDataModal from "../components/ChangePetDataModal";

export default function PetView(props) {

    const pageContext = useContext(PageContext)
    const notes = props.notes;
    const baseNotesUrl = "http://localhost:8080/pets/" + props.pet.id + "/notes/";
    const basePetUrl = "http://localhost:8080/pets/" + props.pet.id;

    // Delete Modal
    const [showDeleteModal, setShowDeleteModel] = useState(false);
    const toggleShowDeleteModal = () => {
        pageContext.setModalShown(!pageContext.isModalShown);
        setShowDeleteModel(!showDeleteModal);
    }

    // Change Note Modal
    const [showChangeNoteModal, setShowChangeNoteModal] = useState(false);
    const [noteToChange, setNoteToChange] = useState();

    function getObjectToChange(id) {
        notes.map((note) => {
            if (note.id === Number(id)) {
                setNoteToChange(note);
            }
        })
    }

    // Change Pet Data Modal
    const [showChangePetDataModal, setShowChangePetDataModal] = useState(false);

    const toggleShowChangeNoteModal = () => {
        pageContext.setModalShown(!pageContext.isModalShown);
        setShowChangeNoteModal(!showChangeNoteModal);
    }

    const toggleShowChangePetDataModal = () => {
        pageContext.setModalShown(!pageContext.isModalShown);
        setShowChangePetDataModal(!showChangePetDataModal);
    }

    // Add Modal
    const [showAddModal, setShowAddModal] = useState(false);
    const toggleShowAddModal = () => {
        pageContext.setModalShown(!pageContext.isModalShown);
        setShowAddModal(!showAddModal);
    }

    return (
        <Container id="view">
            {
                showAddModal &&
                <AddModal
                    isShow="true"
                    setShow={setShowAddModal}
                    modalTitle="Save note?"
                    inputTitle="Title"
                    inputContent="Content"
                    saveUrl={baseNotesUrl}
                    toggleShow={toggleShowAddModal}/>
            }
            {
                showChangeNoteModal &&
                <ChangeNoteModal
                    isShow="true"
                    setShow={setShowChangeNoteModal}
                    modalTitle="Save changes?"
                    inputTitle="Title"
                    inputContent="Content"
                    updateUrl={baseNotesUrl}
                    toggleShow={toggleShowChangeNoteModal}
                    currentObject={noteToChange}/>
            }
            {
                showChangePetDataModal &&
                <ChangePetDataModal
                    isShow="true"
                    setShow={setShowChangePetDataModal}
                    toggleShow={toggleShowChangePetDataModal}
                    updateUrl={basePetUrl}
                    pet={props.pet}/>
            }
            {
                showDeleteModal &&
                <DeleteModal
                    isShow="true"
                    setShow={setShowDeleteModel}
                    modalTitle="Are you sure?"
                    toggleShow={toggleShowDeleteModal}
                    currentObject={noteToChange}
                    deleteUrl={baseNotesUrl}/>
            }

            <Row id="topRow">
                <PetPanel
                    pet={props.pet}
                    getChangeModal={toggleShowChangePetDataModal}/>
            </Row>
            <Row id="bottomRow">
                <Col id="history">
                    <History
                        getAddModal={toggleShowAddModal}/>
                </Col>
                <Col>
                    <PetNotes
                        getAddModal={toggleShowAddModal}
                        getChangeModal={toggleShowChangeNoteModal}
                        getObjectToChange={getObjectToChange}
                        getDeleteModal={toggleShowDeleteModal}
                        notes={notes}/>
                </Col>
            </Row>

        </Container>
    )
}