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
import {PageContext} from "../App";
import {DateTimePickerComponent} from "@syncfusion/ej2-react-calendars/src/datetimepicker/datetimepicker.component";

export default function ChangeHistoryDataModal(props) {

    const pageContext = useContext(PageContext);

    const [visitDateTime, setVisitDateTime] = useState(props.currentObject.dateTime);
    const [purpose, setPurpose] = useState(props.currentObject.purpose);
    const [place, setPlace] = useState(props.currentObject.place);
    const [description, setDescription] = useState(props.currentObject.description);
    const [recommendation, setRecommendation] = useState(props.currentObject.recommendation);
    const [files, setFiles] = useState(props.currentObject.files);

    function update() {
        const data = {
            "dateTime": visitDateTime,
            "purpose": purpose,
            "place": place,
            "description": description,
            "recommendation": recommendation,
            "files": files
        }
        PutData(props.updateUrl + props.currentObject.id, data)
            .then(() => pageContext.setSynchronized(!pageContext.synchronized));
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
                                    defaultValue={purpose}
                                    onChange={(el) => setPurpose(el.target.value)} />
                            </div>
                            <div id="input">
                                <MDBInput
                                    type='text'
                                    label="Place"
                                    defaultValue={place}
                                    onChange={(el) => setPlace(el.target.value)} />
                            </div>
                            <div id="input">
                                <MDBInput
                                    type='text'
                                    label="Description"
                                    defaultValue={description}
                                    onChange={(el) => setDescription(el.target.value)} />
                            </div>
                            <div id="input">
                                <MDBInput
                                    type='text'
                                    label="Recommendation"
                                    defaultValue={recommendation}
                                    onChange={(el) => setRecommendation(el.target.value)} />
                            </div>
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