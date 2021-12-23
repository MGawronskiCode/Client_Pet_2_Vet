import {Col, Row} from "react-bootstrap";
import PetNotes from "../components/PetNotes";
import React, {useContext, useState} from "react";
import '../assets/styles/Card.css'
import DeleteModal from "../components/DeleteModal";
import ChangeModal from "../components/ChangeModal";
import AddModal from "../components/AddModal";
import PetPanel from "../components/PetPanel";
import History from "../components/History";
import {PageContext} from "../App";

export default function PetView(props) {

    const pageContext = useContext(PageContext)
    const notes = props.notes;
    const baseNotesUrl = "http://localhost:8080/pets/" + pageContext.petId + "/notes/";

    // Delete Modal
    const [showDeleteModal, setShowDeleteModel] = useState(false);
    const toggleShowDeleteModal = () => {
        pageContext.setModalShown(!pageContext.isModalShown);
        setShowDeleteModel(!showDeleteModal);
    }

    // Change Modal
    const [showChangeModal, setShowChangeModal] = useState(false);
    const [noteToChange, setNoteToChange] = useState();

    function getObjectToChange(id) {
        notes.map((note) => {
            if (note.id === Number(id)) {
                setNoteToChange(note);
            }
        })
    }

    const toggleShowChangeModal = () => {
        pageContext.setModalShown(!pageContext.isModalShown);
        setShowChangeModal(!showChangeModal);
    }

    // Add Modal
    const [showAddModal, setShowAddModal] = useState(false);
    const toggleShowAddModal = () => {
        pageContext.setModalShown(!pageContext.isModalShown);
        setShowAddModal(!showAddModal);
    }

    return (
        <>
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
                showChangeModal &&
                <ChangeModal
                    isShow="true"
                    setShow={setShowChangeModal}
                    modalTitle="Save changes?"
                    inputTitle="Title"
                    inputContent="Content"
                    updateUrl={baseNotesUrl}
                    toggleShow={toggleShowChangeModal}
                    currentObject={noteToChange}/>
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

            <Row>
                <PetPanel/>
            </Row>
            <Row>
                <Col id="history">
                    <History
                        getAddModal={toggleShowAddModal}/>
                </Col>
                <Col>
                    <PetNotes
                        getAddModal={toggleShowAddModal}
                        getChangeModal={toggleShowChangeModal}
                        getObjectToChange={getObjectToChange}
                        getDeleteModal={toggleShowDeleteModal}
                        notes={notes}/>
                </Col>
            </Row>

        </>
    )
}