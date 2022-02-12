import {
    MDBBtn,
    MDBCol,
    MDBContainer,
    MDBModal,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalTitle,
    MDBRow
} from "mdb-react-ui-kit";
import React from "react";
import ThinkingMan from '../assets/images/thinking_man.png'

export default function InfoModal ({isShow, setShowInfoModal, setShow}) {
    return(
        <>
            <MDBModal show={isShow} setShow={setShow} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>

                        <div id="addNew">
                            <MDBContainer style={{margin: "5px"}}>
                                <MDBRow>
                                    <MDBCol md="11">
                                        <MDBModalTitle className="modal-danger text-center">
                                            Something went wrong...
                                        </MDBModalTitle>
                                    </MDBCol>
                                    <MDBCol md="1">
                                        <MDBBtn className="btn-close btn-close-white" color="none" onClick={setShowInfoModal}/>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </div>

                        <div id="message">
                            <img
                                srcSet={ThinkingMan}
                                style={{ maxWidth: '10rem' }}
                                alt='...'/>
                        </div>

                        <MDBModalFooter className="justify-content-center">
                            <MDBBtn rounded className='mx-2' style={{backgroundColor: '#2d3051'}} onClick={setShowInfoModal}>
                                Close
                            </MDBBtn>
                        </MDBModalFooter>

                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    )
}