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
import ChangeHistoryDataModal from "../components/ChangeHistoryDataModal";

export default function PetView(props) {

    const pageContext = useContext(PageContext)
    const notes = props.notes;
    const visits = props.visits;
    const baseNotesUrl = "http://localhost:8080/pets/" + props.pet.id + "/notes/";
    const baseHistoryUrl = "http://localhost:8080/pets/" + props.pet.id + "/visits/";
    const basePetUrl = "http://localhost:8080/pets/" + props.pet.id;

    const [elementToChange, setElementToChange] = useState();

    // Note Modals
    const [showDeleteModal, setShowDeleteModel] = useState(false);
    const [showChangeNoteModal, setShowChangeNoteModal] = useState(false);
    const [showAddNoteModal, setShowAddNoteModal] = useState(false);

    function changeElement(id, element) {
        let elementsToChange = getElementsToChange(element);
        elementsToChange.map((el) => {
            if (el.id === Number(id)) {
                setElementToChange(el);
            }
        })
    }

    function getElementsToChange(element) {
        let elementsToChange;
        switch (element) {
            case "notes":
                elementsToChange = notes;
                break;
            case "visits":
                elementsToChange = visits;
                break;
        }
        return elementsToChange;
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
    const [showDeleteHistoryModal, setShowDeleteHistoryModal] = useState(false);
    const [showChangeHistoryModal, setShowChangeHistoryModal] = useState(false);
    const toggleShowAddHistoryModal = () => {
        pageContext.setModalShown(!pageContext.isModalShown);
        setShowAddHistoryModal(!showAddHistoryModal);
    }
    const toggleShowDeleteHistoryModal = () => {
        pageContext.setModalShown(!pageContext.isModalShown);
        setShowDeleteHistoryModal(!showDeleteHistoryModal);
    }
    const toggleShowChangeHistoryModal = () => {
        pageContext.setModalShown(!pageContext.isModalShown);
        setShowChangeHistoryModal(!showChangeHistoryModal);
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
                    currentObject={elementToChange}/>
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
                showChangeHistoryModal &&
                <ChangeHistoryDataModal
                    isShow="true"
                    setShow={setShowChangeHistoryModal}
                    updateUrl={baseHistoryUrl}
                    toggleShow={toggleShowChangeHistoryModal}
                    currentObject={elementToChange}/>
            }
            {
                showDeleteModal &&
                <DeleteModal
                    isShow="true"
                    setShow={setShowDeleteModel}
                    modalTitle="Are you sure?"
                    toggleShow={toggleShowDeleteModal}
                    currentObject={elementToChange}
                    deleteUrl={baseNotesUrl}/>
            }
            {
                showDeleteHistoryModal &&
                <DeleteModal
                    isShow="true"
                    setShow={setShowDeleteHistoryModal}
                    modalTitle="Are you sure?"
                    toggleShow={toggleShowDeleteHistoryModal}
                    currentObject={elementToChange}
                    deleteUrl={baseHistoryUrl}/>
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
                        getAddModal={toggleShowAddHistoryModal}
                        getChangeModal={toggleShowChangeHistoryModal}
                        getDeleteModal={toggleShowDeleteHistoryModal}
                        setElementToChange={changeElement}/>
                </Col>
                <Col>
                    <PetNotes
                        getAddModal={toggleShowAddNoteModal}
                        getChangeModal={toggleShowChangeNoteModal}
                        setElementToChange={changeElement}
                        getDeleteModal={toggleShowDeleteModal}
                        notes={notes}/>
                </Col>
            </Row>

        </Container>
    )
}