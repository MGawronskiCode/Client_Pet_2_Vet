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
import {DatePickerComponent} from "@syncfusion/ej2-react-calendars";
import {PageContext} from "../Main";

export default function ChangePetDataModal(props) {

    const pageContext = useContext(PageContext);

    const [name, setName] = useState(props.pet.name);
    const [sex, setSex] = useState("0");
    const [birthday, setBirthday] = useState(props.pet.birthday);

    function update() {
        // TODO: fix problem with updating. Changes the date to the selected date minus one day
        // alert(sex)
        const data = {
            "name": name,
            "sex": sex,
            "birthday": birthday
        }
        PutData(props.updateUrl, data).then(() => pageContext.setSynchronized(!pageContext.synchronized));
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
                                            Save changes?
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
                                defaultValue={props.pet.name}
                                onChange={(el) => setName(el.target.value)}/>
                        </div>
                        <div id="input">
                            <select className="form-select" onChange={(el) => setSex(el.target.valueOf().value)}>
                                <option value={props.pet.sex === "MALE" ? "0" : "1"}>{props.pet.sex === "MALE" ? "Male" : "Female"}</option>
                                <option value={props.pet.sex === "MALE" ? "1" : "0"}>{props.pet.sex === "MALE" ? "Female" : "Male"}</option>
                            </select>
                        </div>
                        <div id="input">
                            Date of birth:
                            <DatePickerComponent
                                placeholder="Date of birth"
                                value={birthday}
                                max={new Date()}
                                format="yyyy-MM-dd"
                                onChange={(el) => setBirthday(el.target.valueOf().value)}/>
                        </div>

                        <MDBModalFooter className="justify-content-center">
                            <MDBBtn rounded style={{backgroundColor: '#2d3051'}} onClick={update}>
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