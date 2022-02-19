import React from 'react';
import '../assets/styles/PetPanel.css';
import {MDBCardImage, MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import DefaultImage from "../assets/images/Pet.png"
import Pin from "../assets/images/Pin.jpg"
import CardElementImage from "./CardElementImage";

export default function PetPanel(props) {

    return (
        <MDBContainer id="container">
            <MDBRow>
                <MDBCol center md='3' id="imageBox">
                    <MDBCardImage
                        id="petImage"
                        src={props.pet.petImage ? props.pet.petImage : DefaultImage}
                        alt='...'/>
                </MDBCol>

                <MDBCol md='9'>
                    <MDBContainer >
                        <MDBRow>
                            <MDBCol md="8" style={{textAlign: 'center'}}>
                                <h1>{props.pet.name ? props.pet.name : "Name"}</h1>
                            </MDBCol>
                            <MDBCol md="3"/>
                            <MDBCol center md="1" id="pinIcon" onClick={props.getChangeModal}>
                                <CardElementImage image={Pin}/>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="2">
                                <p><strong>Sex</strong></p>
                                <p><strong>Birthday</strong></p>
                                <p><strong>Kind</strong></p>
                                <p><strong>Breed</strong></p>
                            </MDBCol>
                            <MDBCol md="2">
                                <p>{props.pet.sex ? (props.pet.sex === "MALE" ? "Male" : "Female") : "Empty"}</p>
                                <p>{props.pet.birthday ? props.pet.birthday : "Empty"}</p>
                                <p>{props.pet.kind ? props.pet.kind : "Empty"}</p>
                                <p>{props.pet.breed ? props.pet.breed : "Empty"}</p>
                            </MDBCol>
                            <MDBCol md="2">
                                <p><strong>Owner</strong></p>
                                <p><strong>Weight</strong></p>
                                <p><strong>Chip No.</strong></p>
                            </MDBCol>
                            <MDBCol md="2">
                                <p>{props.pet.owner ? props.pet.owner : "Empty"}</p>
                                <p>{props.pet.weight ? props.pet.weight : "Empty"}</p>
                                <p>{props.pet.chip ? props.pet.chip : "Empty"}</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
