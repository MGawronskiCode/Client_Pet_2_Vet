import {MDBCard, MDBCardBody, MDBCardTitle} from "mdb-react-ui-kit";
import React, {useState} from "react";
import CardHeader from "./CardHeader";
import HistoryImage from "../assets/images/History.jpg";
import Visit from "./Visit";


export default function History (props) {

    const visits = props.visits;
    const [disabled, setDisabled] = useState(true);

    function getVisits() {
        return visits.map((visit, index) => {
            return (
                <div key={index}>
                    <Visit
                        visit={visit}
                        index={index}
                        setDisabled={setDisabled}
                        image={HistoryImage}/>
                </div>
            )
        })
    }

    return (
        <div
            onMouseOver={() => setDisabled(false)}
            onMouseOut={() => setDisabled(true)}>
            <MDBCard id="card">

                <MDBCardTitle>
                    <CardHeader
                        title="History"
                        disabled={disabled}
                        getAddModal={props.getAddModal} />
                </MDBCardTitle>

                <MDBCardBody>
                    {getVisits()}
                </MDBCardBody>

            </MDBCard>
        </div>
    )
}