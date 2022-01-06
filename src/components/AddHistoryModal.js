import {
    MDBBtn,
    MDBCol,
    MDBContainer, MDBInput,
    MDBModal,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalTitle,
    MDBRow
} from "mdb-react-ui-kit";
import React, {useContext, useState} from "react";
import {PageContext} from "../App";
import {DateTimePickerComponent} from "@syncfusion/ej2-react-calendars/src/datetimepicker/datetimepicker.component";
import PostData from "../services/PostData";

export default function AddHistoryModal(props) {

    const pageContext = useContext(PageContext);

    const [visitDateTime, setVisitDateTime] = useState(new Date());
    const [purpose, setPurpose] = useState("");
    const [place, setPlace] = useState("");
    const [description, setDescription] = useState("");
    const [recommendation, setRecommendation] = useState("");

    function save() {
        // TODO: files
        const data = {
            "dateTime": visitDateTime,
            "purpose": purpose,
            "place": place,
            "description": description,
            "recommendation": recommendation,
            "files": []
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
                            Date and time of visit:
                            <DateTimePickerComponent
                                placeholder="Select the date and time of visit"
                                value={visitDateTime}
                                mode={'dateTime'}
                                step={10}
                                format={"yyyy MMM dd / HH:mm"}
                                onChange={(el) => setVisitDateTime(el.target.valueOf().value)}/>
                        </div>

                        <div id="input">
                            Description of visit:
                            <div id="input">
                                <MDBInput
                                    type='text'
                                    label="Purpose"
                                    onChange={(el) => setPurpose(el.target.value)} />
                            </div>
                            <div id="input">
                                <MDBInput
                                    type='text'
                                    label="Place"
                                    onChange={(el) => setPlace(el.target.value)} />
                            </div>
                            <div id="input">
                                <MDBInput
                                    type='text'
                                    label="Description"
                                    onChange={(el) => setDescription(el.target.value)} />
                            </div>
                            <div id="input">
                                <MDBInput
                                    type='text'
                                    label="Recommendation"
                                    onChange={(el) => setRecommendation(el.target.value)} />
                            </div>
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