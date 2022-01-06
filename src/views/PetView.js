import {Col, Container, Row} from "react-bootstrap";
import PetNotes from "../components/PetNotes";
import React, {useContext, useState} from "react";
import '../assets/styles/View.css';
import '../assets/styles/Card.css';
import DeleteModal from "../components/DeleteModal";
import ChangeNoteModal from "../components/ChangeNoteModal";
import AddNoteModal from "../components/AddNoteModal";
import PetPanel from "../components/PetPanel";
import History from "../components/History";
import {PageContext} from "../App";
import ChangePetDataModal from "../components/ChangePetDataModal";
import AddHistoryModal from "../components/AddHistoryModal";

export default function PetView(props) {

    const pageContext = useContext(PageContext)
    const notes = props.notes;
    const baseNotesUrl = "http://localhost:8080/pets/" + props.pet.id + "/notes/";
    const baseHistoryUrl = "http://localhost:8080/pets/" + props.pet.id + "/visits/";
    const basePetUrl = "http://localhost:8080/pets/" + props.pet.id;

    // Note Modals
    const [showDeleteModal, setShowDeleteModel] = useState(false);
    const [showChangeNoteModal, setShowChangeNoteModal] = useState(false);
    const [noteToChange, setNoteToChange] = useState();
    const [showAddNoteModal, setShowAddNoteModal] = useState(false);

    function getObjectToChange(id) {
        notes.map((note) => {
            if (note.id === Number(id)) {
                setNoteToChange(note);
            }
        })
    }

    const toggleShowDeleteModal = () => {
        pageContext.setModalShown(!pageContext.isModalShown);
        setShowDeleteModel(!showDeleteModal);
    }
    const toggleShowChangeNoteModal = () => {
        pageContext.setModalShown(!pageContext.isModalShown);
        setShowChangeNoteModal(!showChangeNoteModal);
    }
    const toggleShowAddNoteModal = () => {
        pageContext.setModalShown(!pageContext.isModalShown);
        setShowAddNoteModal(!showAddNoteModal);
    }

    // Pet Data Modal
    const [showChangePetDataModal, setShowChangePetDataModal] = useState(false);

    const toggleShowChangePetDataModal = () => {
        pageContext.setModalShown(!pageContext.isModalShown);
        setShowChangePetDataModal(!showChangePetDataModal);
    }

    // History Modals
    const [showAddHistoryModal, setShowAddHistoryModal] = useState(false);
    const toggleShowAddHistoryModal = () => {
        pageContext.setModalShown(!pageContext.isModalShown);
        setShowAddHistoryModal(!showAddHistoryModal);
    }

    return (
        <Container id="view">
            {
                showAddNoteModal &&
                <AddNoteModal
                    isShow="true"
                    setShow={setShowAddNoteModal}
                    modalTitle="Save note?"
                    inputTitle="Title"
                    inputContent="Content"
                    saveUrl={baseNotesUrl}
                    toggleShow={toggleShowAddNoteModal}/>
            }
            {
                showAddHistoryModal &&
                <AddHistoryModal
                    isShow="true"
                    setShow={setShowAddHistoryModal}
                    modalTitle="Save history?"
                    saveUrl={baseHistoryUrl}
                    toggleShow={toggleShowAddHistoryModal}/>
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
                        visits={props.visits}
                        getAddModal={toggleShowAddHistoryModal}/>
                </Col>
                <Col>
                    <PetNotes
                        getAddModal={toggleShowAddNoteModal}
                        getChangeModal={toggleShowChangeNoteModal}
                        getObjectToChange={getObjectToChange}
                        getDeleteModal={toggleShowDeleteModal}
                        notes={notes}/>
                </Col>
            </Row>

        </Container>
    )
}