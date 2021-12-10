import {MDBCard, MDBCardBody, MDBCardTitle} from "mdb-react-ui-kit";
import React from "react";
import CardHeader from "./Elements/CardHeader";


export default function History () {
    return (
        <div>
            <MDBCard id="card">

                <MDBCardTitle>
                    <CardHeader title="History" />
                </MDBCardTitle>

                <MDBCardBody>

                </MDBCardBody>

            </MDBCard>
        </div>
    )
}