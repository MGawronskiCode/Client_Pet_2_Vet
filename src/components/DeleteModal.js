import {
    MDBBtn,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBModal,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalTitle,
    MDBRow
} from "mdb-react-ui-kit";
import React, {useContext} from "react";
import '../assets/styles/Modal.css'
import DeleteData from "../services/DeleteData";
import {PageContext} from "../Main";

export default function DeleteModal({isShow, setShow, deleteUrl, toggleShow, currentObject}) {

    const pageContext = useContext(PageContext);

    function deleteObject() {
        DeleteData(deleteUrl + currentObject.id)
            .then(() => pageContext.setSynchronized(!pageContext.synchronized));
        toggleShow();
    }

    return (
        <>
            <MDBModal show={isShow} setShow={setShow} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>

                        <div id="warning">
                            <MDBContainer>
                                <MDBRow>
                                    <MDBCol md="11">
                                        <MDBModalTitle className="modal-danger text-center">
                                            "Are you sure?"
                                        </MDBModalTitle>
                                    </MDBCol>
                                    <MDBCol md="1">
                                        <MDBBtn className="btn-close btn-close-white" color="none"
                                                onClick={toggleShow}/>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </div>

                        <div id="cross">
                            <MDBIcon fas icon="times"/>
                        </div>

                        <MDBModalFooter className="justify-content-center">
                            <MDBBtn rounded className='mx-2' color='danger' onClick={deleteObject}>
                                Yes
                            </MDBBtn>
                            <MDBBtn outline rounded className='mx-2' color='dark' onClick={toggleShow}>
                                No
                            </MDBBtn>
                        </MDBModalFooter>

                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}