import {MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBIcon} from "mdb-react-ui-kit";
import React, {useContext} from "react";
import {PageContext} from "../Main";
import "../assets/styles/Card.css"
import ImageP from "../assets/images/Pet.png"

export default function PetCard(props) {

    const pageContext = useContext(PageContext)

    function changeView(petId) {
        pageContext.setUserMenu(false);
        pageContext.setPetMenu(true);
        pageContext.setPetId(petId);
        pageContext.setCurrentView(pageContext.view.PET);
    }

    function showAddModal() {
        props.toggleShow();
    }

    function getPetCard() {
        return (
            <MDBCol center sm={3}>
                <MDBCard id="petCard" onClick={() => changeView(props.pet.id)}>
                    <MDBCardImage
                        id="image"
                        src={ImageP}
                        alt='...'/>
                    <MDBCardBody>
                        <MDBCardTitle id="card-title">
                            {props.pet.name}
                        </MDBCardTitle>
                        <MDBCardText>
                            <p>Sex: {props.pet.sex}</p>
                            <p>Birthday: {props.pet.birthday}</p>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        )
    }

    function getAddCard() {
        return (
            <MDBCol center sm={3}>
                <MDBCard id="addPet" onClick={() => showAddModal()}>
                    <MDBCardImage
                        id="image"
                        src={props.image}
                        alt='...'/>
                    <MDBCardBody>
                        <MDBCardTitle id="card-title">
                            New pet
                        </MDBCardTitle>
                        <MDBCardText>
                            <div id="plus">
                                <MDBIcon fas icon="plus"/>
                            </div>
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        )
    }

    return (
        <>
            {props.pet !== null && getPetCard()}
            {props.pet === null && getAddCard()}
        </>
    )
}