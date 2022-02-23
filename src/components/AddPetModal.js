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
import {DatePickerComponent} from "@syncfusion/ej2-react-calendars"
import PostData from "../services/PostData";
import {PageContext} from "../Main";

export default function AddPetModal({isShow, setShow, toggleShow}) {

    const pageContext = useContext(PageContext)

    const [name, setName] = useState("");
    const [sex, setSex] = useState("0");
    // const [specie, setSpecie] = useState("Mammal");
    const [dateOfBirth, setDateOfBirth] = useState(new Date());

    function save() {
        const data = {
            "name": name,
            "sex": sex,
            // "specie": new Object({"id": 2, "name": specie, "isDeleted": false}),
            // "specie": new Object({"name": specie}),
            "birthday": dateOfBirth
        }
        PostData("/pets", data).then(() => pageContext.setSynchronized(!pageContext.synchronized));
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
                                            New Pet
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
                                label="Name"
                                onChange={(el) => setName(el.target.value)}/>
                        </div>

                        <div id="input">
                            <select className="form-select" onChange={(el) => setSex(el.target.valueOf().value)}>
                                <option value="0">Male</option>
                                <option value="1">Female</option>
                            </select>
                        </div>

                        {/*<div id="input">*/}
                        {/*    <select className="form-select" onChange={(el) => setSpecie(el.target.valueOf().value)}>*/}
                        {/*        <option value="Mammal">Mammal</option>*/}
                        {/*        <option value="Bird">Bird</option>*/}
                        {/*        <option value="Rodent">Rodent</option>*/}
                        {/*        <option value="Reptile">Reptile</option>*/}
                        {/*    </select>*/}
                        {/*</div>*/}

                        <div id="input">
                            Date of birth:
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