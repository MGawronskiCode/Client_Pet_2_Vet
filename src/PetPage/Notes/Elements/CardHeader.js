import React from "react";
import {MDBCol, MDBContainer, MDBIcon, MDBRow} from "mdb-react-ui-kit";

export default function CardHeader(props) {

    return (
        <div id="card-title-badge" className="container-xl">
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="11" >
                        <div id="card-title">
                            {props.title}
                        </div>
                    </MDBCol>
                    <MDBCol md="1" id="basket">
                        {
                            props.disabled ?
                                <MDBIcon id="disabled" fas icon="plus-circle"/>
                                :
                                <MDBIcon id="add" fas icon="plus-circle" onClick={props.getAddModal}/>
                        }
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}