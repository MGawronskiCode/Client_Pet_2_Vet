import React from "react";
import {MDBCol, MDBContainer, MDBIcon, MDBRow} from "mdb-react-ui-kit";

export default function CardHeader({title, disabled, setShow, setCurrentElement, setCurrentOperation}) {

    return (
        <div id="card-title-badge" className="container-xl">
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="11">
                        <div id="card-title">
                            {title}
                        </div>
                    </MDBCol>
                    <MDBCol md="1" id="basket">
                        {
                            disabled ?
                                <MDBIcon id="disabled" fas icon="plus-circle"/>
                                :
                                <MDBIcon id="add" fas icon="plus-circle" onClick={() => {
                                    setShow();
                                    setCurrentElement();
                                    setCurrentOperation();
                                }}/>
                        }
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}