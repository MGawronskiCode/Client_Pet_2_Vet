import React from "react";
import {MDBBadge, MDBCol, MDBContainer, MDBIcon, MDBRow} from "mdb-react-ui-kit";

export default function CardHeader(props) {

    function addNewCard() {
        alert("Modal with input boxes will be here.");
    }

    return (
        <div>
            <MDBBadge className="container-xl">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="11">
                            <h4>
                                {props.title}
                            </h4>
                        </MDBCol>
                        <MDBCol md="1" id="basket">
                            {
                                props.disabled ?
                                    <MDBIcon id="disabled" fas icon="plus-circle"/>
                                    :
                                    <MDBIcon id="add" fas icon="plus-circle" onClick={addNewCard}/>
                            }
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBBadge>
        </div>
    )
}