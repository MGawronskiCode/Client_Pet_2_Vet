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
import React, {useState} from "react";
import '../assets/styles/Modal.css'
import PostData from "../services/PostData";
import PutData from "../services/PutData";

export default function ChangeModal(props) {

    const [title, setTitle] = useState(props.currentObject.title)
    const [content, setContent] = useState(props.currentObject.content)

    function update() {
        const data = {
            "title": title,
            "content": content
        }
        PutData(props.updateUrl + props.currentObject.id, data);
        props.toggleShow();
    }

    return (
        <>
            <MDBModal show={props.isShow} setShow={props.setShow} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>

                        <div id="update">
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
                                defaultValue={props.currentObject.title}
                                onChange={(el) => setTitle(el.target.value)}/>
                        </div>
                        <div id="input">
                            <MDBInput
                                type='text'
                                label={props.inputContent}
                                defaultValue={props.currentObject.content}
                                onChange={(el) => setContent(el.target.value)}/>
                        </div>

                        <MDBModalFooter className="justify-content-center">
                            <MDBBtn rounded color='success' onClick={update}>
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