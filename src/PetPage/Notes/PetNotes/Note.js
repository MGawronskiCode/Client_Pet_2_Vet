import React, {useState} from "react";
import NoteContent from "../Elements/NoteContent";
import {MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import NoteImage from "../Elements/NoteImage";

export default function Note(props) {

    const [disabled, setDisabled] = useState(true);

    return (
        <div key={props.index}
            onMouseOver={() => setDisabled(false)}
            onMouseOut={() => setDisabled(true)}>

            <div>
                <MDBCard id="note">
                    <MDBCardBody>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md="2" className='col-example'>
                                    <NoteImage/>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCardTitle>{props.note.title}</MDBCardTitle>
                                    <MDBCardText>
                                        <div>
                                            <NoteContent
                                                content={props.note.content}
                                                disabled={disabled}
                                                getDeleteModal={props.getDeleteModal} 
                                                getChangeModel={props.getChangeModel}
                                                id={props.note.id}/>
                                        </div>
                                    </MDBCardText>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </div>
    )
}