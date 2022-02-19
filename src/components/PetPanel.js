import React from 'react';
import '../assets/styles/PetPanel.css';
import {MDBCardImage, MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import DefaultImage from "../assets/images/Pet.png"
import Pin from "../assets/images/Pin.jpg"
import CardElementImage from "./CardElementImage";

export default function PetPanel({pet, getChangeModal}) {

    return (
        <MDBContainer id="container">
            <MDBRow>
                <MDBCol center md='3' id="imageBox">
                    <MDBCardImage
                        id="petImage"
                        src={pet.petImage != null ? pet.petImage : DefaultImage}
                        alt='...'/>
                </MDBCol>

                <MDBCol md='9'>
                    <MDBContainer >
                        <MDBRow>
                            <MDBCol md="8" style={{textAlign: 'center'}}>
                                <h1>{pet.name ? pet.name : "Name"}</h1>
                            </MDBCol>
                            <MDBCol md="3"/>
                            <MDBCol center md="1" id="pinIcon" onClick={getChangeModal}>
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
                                <p>{pet.sex ? (pet.sex === "MALE" ? "Male" : "Female") : "Empty"}</p>
                                <p>{pet.birthday ? pet.birthday : "Empty"}</p>
                                <p>{pet.kind ? pet.kind : "Empty"}</p>
                                <p>{pet.breed ? pet.breed : "Empty"}</p>
                            </MDBCol>
                            <MDBCol md="2">
                                <p><strong>Owner</strong></p>
                                <p><strong>Weight</strong></p>
                                <p><strong>Chip No.</strong></p>
                            </MDBCol>
                            <MDBCol md="2">
                                <p>{pet.owner ? pet.owner : "Empty"}</p>
                                <p>{pet.weight ? pet.weight : "Empty"}</p>
                                <p>{pet.chip ? pet.chip : "Empty"}</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
