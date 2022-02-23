import {
    MDBBtn,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBModal,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalTitle,
    MDBRow
} from "mdb-react-ui-kit";
import React, {useContext, useState} from "react";
import '../assets/styles/Modal.css'
import PutData from "../services/PutData";
import {PageContext} from "../Main";

export default function ChangeNoteModal({isShow, setShow, currentObject, updateUrl, toggleShow}) {

    const pageContext = useContext(PageContext)

    const [title, setTitle] = useState(currentObject.title)
    const [content, setContent] = useState(currentObject.content)

    function update() {
        const data = {
            "title": title,
            "content": content
        }
        PutData(updateUrl + currentObject.id, data)
            .then(() => pageContext.setSynchronized(!pageContext.synchronized));
        toggleShow();
    }

    return (
        <>
            <MDBModal show={isShow} setShow={setShow} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>

                        <div id="addNew">
                            <MDBContainer>
                                <MDBRow>
                                    <MDBCol md="11">
                                        <MDBModalTitle className="modal-danger text-center">
                                            "Save changes?"
                                        </MDBModalTitle>
                                    </MDBCol>
                                    <MDBCol md="1">
                                        <MDBBtn className="btn-close btn-close-white" color="none" onClick={toggleShow}/>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </div>

                        <div id="input">
                            <MDBInput
                                type='text'
                                label="Title"
                                defaultValue={currentObject.title}
                                onChange={(el) => setTitle(el.target.value)}/>
                        </div>
                        <div id="input">
                            <MDBInput
                                type='text'
                                label="Content"
                                defaultValue={currentObject.content}
                                onChange={(el) => setContent(el.target.value)}/>
                        </div>

                        <MDBModalFooter className="justify-content-center">
                            <MDBBtn rounded style={{backgroundColor: '#2d3051'}} onClick={update}>
                                Save
                            </MDBBtn>
                            <MDBBtn outline rounded className='mx-2' color='dark' onClick={toggleShow}>
                                Cancel
                            </MDBBtn>
                        </MDBModalFooter>

                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}