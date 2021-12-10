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
import React from "react";

export default function AddModal(props) {

    return (
        <>
            <MDBModal show={props.isShow} setShow={props.setShow} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>

                        <div id="addNew">
                            <MDBContainer>
                                <MDBRow>
                                    <MDBCol md="11">
                                        <MDBModalTitle className="modal-danger text-center">Save
                                            note?</MDBModalTitle>
                                    </MDBCol>
                                    <MDBCol md="1">
                                        <MDBBtn className='btn-close' color='none' onClick={props.toggleShow}/>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </div>

                        <div id="input">
                            <MDBInput label='Title' id='form1' type='text'/>
                        </div>
                        <div id="input">
                            <MDBInput label='PetNote' id='form1' type='text'/>
                        </div>

                        <MDBModalFooter className="justify-content-center">
                            <MDBBtn rounded color='primary' onClick={props.toggleShow}>
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