import {Col, Row} from "react-bootstrap";
import PetNotes from "../PetPage/Notes/PetNotes";
import React, {useContext, useState} from "react";
import '../assets/styles/Old/Notes.css'
import DeleteModal from "../PetPage/Notes/Modals/DeleteModal/DeleteModal";
import ChangeModal from "../PetPage/Notes/Modals/ChangeModal/ChangeModal";
import AddModal from "../PetPage/Notes/Modals/AddModal/AddModal";
import PetPanel from "../PetPage/PetPanel/PetPanel";
import History from "../PetPage/History/History";
import {PageContext} from "../App";

export default function PetView(props) {

    const pageContext = useContext(PageContext)

    const notes = props.notes;

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

    return (
        <>
            {
                showAddModal && <AddModal isShow="true" setShow={setShowAddModal} toggleShow={toggleShowAddModal}/>
            }
            {
                showChangeModal &&
                <ChangeModal isShow="true" setShow={setShowChangeModal} toggleShow={toggleShowChangeModal}
                    note={noteToChange}/>
            }
            {
                showDeleteModal &&
                <DeleteModal isShow="true" setShow={setShowDeleteModel} toggleShow={toggleShowDeleteModal}/>
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
                        getDeleteModal={toggleShowDeleteModal}
                        notes={notes}/>
                </Col>
            </Row>

        </>
    )
}