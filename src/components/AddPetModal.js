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
import {DatePickerComponent} from "@syncfusion/ej2-react-calendars"
import PostData from "../services/PostData";

export default function AddPetModal(props) {

    const [name, setName] = useState("");
    const [sex, setSex] = useState("Male");
    const [dateOfBirth, setDateOfBirth] = useState("Date of birth");

    function save() {
        alert(dateOfBirth)
        const data = {
            "name": name,
            "sex": sex,
            "birthday": dateOfBirth
        }
        PostData(props.saveUrl, data);
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
                                            New Pet
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
                                label="Name"
                                onChange={(el) => setName(el.target.value)}/>
                        </div>

                        <div id="input">
                            <select className="form-select" onChange={(el) => setSex(el.target.valueOf().value)}>
                                <option value="0">Male</option>
                                <option value="1">Female</option>
                            </select>
                        </div>

                        <div id="input">
                            <DatePickerComponent
                                placeholder="Date of birth"
                                value={dateOfBirth}
                                max={new Date()}
                                format="yyyy-MM-dd"
                                onChange={(el) => setDateOfBirth(el.target.valueOf().value)}/>
                        </div>

                        <MDBModalFooter className="justify-content-center">
                            <MDBBtn rounded style={{backgroundColor: '#2d3051'}} onClick={save}>
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