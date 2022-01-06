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
import {PageContext} from "../App";

export default function AddNoteModal(props) {

    const pageContext = useContext(PageContext);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function save() {
        const data = {
            "title": title,
            "content": content
        }
        PostData(props.saveUrl, data).then(() => pageContext.setSynchronized(!pageContext.synchronized));
        props.toggleShow();
    }

    return (
        <>
            <MDBModal show={props.isShow} setShow={props.setShow} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>

                        <div id="addNew">
                            <MDBContainer>
                                <MDBRow>
                                    <MDBCol md="11">
                                        <MDBModalTitle className="modal-danger text-center">
                                            {props.modalTitle}
                                        </MDBModalTitle>
                                    </MDBCol>
                                    <MDBCol md="1">
                                        <MDBBtn className="btn-close btn-close-white" color="none" onClick={props.toggleShow}/>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </div>

                        <div id="input">
                            <MDBInput
                                type='text'
                                label={props.inputTitle}
                                onChange={(el) => setTitle(el.target.value)} />
                        </div>
                        <div id="input">
                            <MDBInput
                                type='text'
                                label={props.inputContent}
                                onChange={(el) => setContent(el.target.value)}/>
                        </div>

                        <MDBModalFooter className="justify-content-center">
                            <MDBBtn rounded style={{ backgroundColor: '#2d3051' }} onClick={save}>
                                Save
                            </MDBBtn>
                            <MDBBtn outline rounded className='mx-2' color='dark' onClick={props.toggleShow}>
                                Cancel
                            </MDBBtn>
                        </MDBModalFooter>

                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}