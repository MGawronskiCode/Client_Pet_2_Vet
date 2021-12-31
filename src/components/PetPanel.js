import React from 'react';
import '../assets/styles/PetPanel.css';
import {MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBRow} from "mdb-react-ui-kit";
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
                        src={DefaultImage}
                        alt='...'/>
                </MDBCol>

                <MDBCol md='9'>
                    <MDBContainer >
                        <MDBRow>
                            <MDBCol md="11" style={{textAlign: 'center'}}>
                                <h1>{props.pet.name}</h1>
                            </MDBCol>
                            <MDBCol center md="1" id="pinIcon">
                                <CardElementImage image={Pin}/>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                    <MDBContainer>
                        <MDBRow>
                            <MDBCol>
                                <p>Sex: {props.pet.sex}</p>
                                <p>Birthday: {props.pet.birthday}</p>
                                Kind
                                Breed
                            </MDBCol>
                            <MDBCol>
                                Owner

                                Weight
                                Chip No.
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>








                </MDBCol>
            </MDBRow>
        </MDBContainer>

    );
}
