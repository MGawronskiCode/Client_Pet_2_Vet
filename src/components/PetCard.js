import {MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol, MDBIcon} from "mdb-react-ui-kit";
import React, {useContext} from "react";
import {PageContext} from "../Main";
import "../assets/styles/Card.css"
import ImageP from "../assets/images/Pet.png"
import {View} from "../commons/Views"
import {MenuNavigation} from "../commons/MenuNavigation";

export default function PetCard({pet, image, toggleShow}) {

    const pageContext = useContext(PageContext)

    function changeView(petId) {
        pageContext.setPetId(petId);
        pageContext.setActualView(View.PET);
        pageContext.setActualMenu(MenuNavigation.PET_MENU);
        pageContext.setSynchronized(!pageContext.synchronized)
    }

    function getPetCard() {
        return (
            <MDBCol center sm="3">
                <MDBCard id="petCard" onClick={() => changeView(pet.id)}>
                    <MDBCardImage
                        id="image"
                        src={ImageP}
                        alt='...'/>
                    <MDBCardBody>
                        <MDBCardTitle id="card-title">
                            {pet.name}
                        </MDBCardTitle>
                        <p>Sex: {pet.sex}</p>
                        <p>Birthday: {pet.birthday}</p>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        )
    }

    function getAddCard() {
        return (
            <MDBCol center sm="3">
                <MDBCard id="addPet" onClick={toggleShow}>
                    <MDBCardImage
                        id="image"
                        src={image}
                        alt='...'/>
                    <MDBCardBody>
                        <MDBCardTitle id="card-title">
                            New pet
                        </MDBCardTitle>
                        <div id="plus">
                            <MDBIcon fas icon="plus" id="plus"/>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        )
    }

    return (
        <>
            {pet !== null && getPetCard()}
            {pet === null && getAddCard()}
        </>
    )
}