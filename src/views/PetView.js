import {Col, Container, Row} from "react-bootstrap";
import {PageContext} from "../Main";
import {Element} from "../commons/Element";
import {Operation} from "../commons/Operations";
import React, {useContext, useState} from "react";
import '../assets/styles/View.css';
import '../assets/styles/Card.css';
import PetNotes from "../components/PetNotes";
import DeleteModal from "../components/DeleteModal";
import ChangeNoteModal from "../components/ChangeNoteModal";
import AddNoteModal from "../components/AddNoteModal";
import PetPanel from "../components/PetPanel";
import History from "../components/History";
import ChangePetDataModal from "../components/ChangePetDataModal";
import AddHistoryModal from "../components/AddHistoryModal";
import ChangeHistoryDataModal from "../components/ChangeHistoryDataModal";

export default function PetView({pet, notes, visits}) {

    const pageContext = useContext(PageContext)

    const baseNotesUrl = "/pets/" + pageContext.petId + "/notes/";
    const baseHistoryUrl = "/pets/" + pageContext.petId + "/visits/";
    const basePetUrl = "/pets/" + pageContext.petId;

    const [isShow, setShow] = useState(false);
    const [currentElement, setCurrentElement] = useState(null);
    const [currentOperation, setCurrentOperation] = useState(null);
    const [elementToChange, setElementToChange] = useState(null);


    // Note Modals
    const [showDeleteModal, setShowDeleteModel] = useState(false);
    const [showChangeNoteModal, setShowChangeNoteModal] = useState(false);
    const [showAddNoteModal, setShowAddNoteModal] = useState(false);

    function changeElement(id, element) {
        let elements = getElementsToChange(element);
        elements.map((el) => {
            if (el.id === Number(id)) {
                setElementToChange(el);
            }
        })
    }

    function getElementsToChange(element) {
        let elements;
        switch (element) {
            case Element.NOTE:
                elements = notes;
                break;
            case Element.HISTORY:
                elements = visits;
                break;
        }
        return elements;
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
                currentElement === Element.HISTORY && currentOperation === Operation.ADD && isShow &&
                <AddHistoryModal
                    isShow={isShow}
                    setShow={setShow}
                    modalTitle="Save history?"
                    saveUrl={baseHistoryUrl}
                    toggleShow={() => setShow(!isShow)}/>
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
                    pet={pet}/>
            }
            {
                currentElement === Element.HISTORY && currentOperation === Operation.CHANGE && isShow &&
                <ChangeHistoryDataModal
                    isShow={isShow}
                    setShow={setShow}
                    updateUrl={baseHistoryUrl}
                    toggleShow={() => setShow(!isShow)}
                    currentObject={elementToChange}/>
            }
            {
                showDeleteModal &&
                <DeleteModal
                    isShow="true"
                    setShow={setShowDeleteModel}
                    toggleShow={toggleShowDeleteModal}
                    currentObject={elementToChange}
                    deleteUrl={baseNotesUrl}/>
            }
            {
                currentElement === Element.HISTORY && currentOperation === Operation.DELETE && isShow &&
                <DeleteModal
                    isShow={isShow}
                    setShow={setShow}
                    deleteUrl={baseHistoryUrl}
                    toggleShow={() => setShow(!isShow)}
                    currentObject={elementToChange}/>
            }

            <Row id="topRow">
                <PetPanel
                    pet={pet}
                    getChangeModal={toggleShowChangePetDataModal}/>
            </Row>
            <Row id="bottomRow">
                <Col id="history">
                    <History
                        visits={visits}
                        setShow={() => setShow(!isShow)}
                        setCurrentElement={() => setCurrentElement(Element.HISTORY)}
                        setCurrentOperation={setCurrentOperation}
                        setElementToChange={changeElement}
                    />
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