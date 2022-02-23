import {
    MDBBtn,
    MDBCol,
    MDBContainer, MDBInput,
    MDBModal,
    MDBModalContent,
    MDBModalDialog, MDBModalFooter,
    MDBModalTitle,
    MDBRow
} from "mdb-react-ui-kit";
import React, {useContext, useState} from "react";
import PostData from "../services/PostData";
import {PageContext} from "../Main";

export default function AddNoteModal({modalTitle, saveUrl, isShow, setShow, toggleShow}) {

    const pageContext = useContext(PageContext);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function save() {
        const data = {
            "title": title,
            "content": content
        }
        PostData(saveUrl, data).then(() => pageContext.setSynchronized(!pageContext.synchronized));
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
                                            {modalTitle}
                                        </MDBModalTitle>
                                    </MDBCol>
                                    <MDBCol md="1">
                                        <MDBBtn className="btn-close btn-close-white" color="none"
                                                onClick={toggleShow}/>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </div>

                        <div id="input">
                            <MDBInput
                                type='text'
                                label="Title"
                                onChange={(el) => setTitle(el.target.value)}/>
                        </div>
                        <div id="input">
                            <MDBInput
                                type='text'
                                label="Content"
                                onChange={(el) => setContent(el.target.value)}/>
                        </div>

                        <MDBModalFooter className="justify-content-center">
                            <MDBBtn rounded style={{backgroundColor: '#2d3051'}} onClick={save}>
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