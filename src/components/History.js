import {MDBCard, MDBCardBody, MDBCardTitle} from "mdb-react-ui-kit";
import React, {useState} from "react";
import CardHeader from "./CardHeader";
import HistoryImage from "../assets/images/History.jpg";
import Visit from "./Visit";
import {Operation} from "../commons/Operations";

export default function History ({visits, setShow, setCurrentElement, setCurrentOperation, setElementToChange}) {

    const [disabled, setDisabled] = useState(true);

    function getVisits() {
        return visits.map((visit, index) => {
            return (
                <div key={index}>
                    <Visit
                        visit={visit}
                        setShow={setShow}
                        setCurrentElement={setCurrentElement}
                        setCurrentOperation={setCurrentOperation}
                        setElementToChange={setElementToChange}
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
                        setShow={setShow}
                        setCurrentElement={setCurrentElement}
                        setCurrentOperation={() => setCurrentOperation(Operation.ADD)}
                    />
                </MDBCardTitle>

                <MDBCardBody>
                    {visits.length !== 0 ? getVisits() : "Empty"}
                </MDBCardBody>

            </MDBCard>
        </div>
    )
}