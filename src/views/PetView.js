import {Col, Row} from "react-bootstrap";
import PetNotes from "../PetPage/Notes/PetNotes";
import React, {useContext, useState} from "react";
import '../assets/styles/Old/Notes.css'
import DeleteModal from "../PetPage/Notes/Modals/DeleteModal/DeleteModal";
import ChangeModal from "../components/ChangeModal";
import AddModal from "../components/AddModal";
import PetPanel from "../PetPage/PetPanel/PetPanel";
import History from "../PetPage/History/History";
import {PageContext} from "../App";

export default function PetView(props) {

    const pageContext = useContext(PageContext)
    const notes = props.notes;
    const saveUrl = "http://localhost:8080/pets/" + pageContext.petId + "/notes";
    const updateUrl = "http://localhost:8080/pets/" + pageContext.petId + "/notes/";

    // Delete Modal
    const [showDeleteModal, setShowDeleteModel] = useState(false);
    const toggleShowDeleteModal = () => setShowDeleteModel(!showDeleteModal);

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
        pageContext.setModalShown(!pageContext.isModalShown)
        setShowChangeModal(!showChangeModal);
    }

    // Add Modal
    const [showAddModal, setShowAddModal] = useState(false);
    const toggleShowAddModal = () => {
        pageContext.setModalShown(!pageContext.isModalShown)
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
                    inputContent="Note"
                    saveUrl={saveUrl}
                    toggleShow={toggleShowAddModal}/>
            }
            {
                showChangeModal && noteToChange != null &&
                <ChangeModal
                    isShow="true"
                    setShow={setShowChangeModal}
                    modalTitle="Save changes?"
                    inputTitle="Title"
                    inputContent="Note"
                    updateUrl={updateUrl}
                    toggleShow={toggleShowChangeModal}
                    currentObject={noteToChange}/>
            }
            {
                showDeleteModal &&
                <DeleteModal
                    isShow="true"
                    setShow={setShowDeleteModel}
                    toggleShow={toggleShowDeleteModal}/>
            }

            <Row>
                <PetPanel/>
            </Row>
            <Row>
                <Col id="history">
                    <History/>
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