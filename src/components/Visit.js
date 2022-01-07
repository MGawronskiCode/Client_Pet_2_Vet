import {MDBCard, MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import CardElementImage from "./CardElementImage";
import CardElementContent from "./CardElementContent";
import React, {useState} from "react";
import Time from "react-time";

export default function Visit(props) {

    const [disabled, setDisabled] = useState(true);

    return (
        <MDBCard
            id="element"
            onMouseOver={() => setDisabled(false)}
            onMouseOut={() => setDisabled(true)}>

            <MDBContainer>
                <MDBContainer style={{textAlign: "center"}}>
                    <MDBRow>
                        <MDBCol md="2" className='col-example'>
                            <CardElementImage
                                image={props.image}/>
                        </MDBCol>
                        <MDBCol center md="8">
                            <h5>Visit <Time value={new Date(props.visit.dateTime)} format="DD MMM YYYY"/></h5>
                        </MDBCol>
                        <MDBCol center md="2">
                            <CardElementContent
                                disabled={disabled}
                                id={props.visit.id}
                                setElementToChange={props.setElementToChange}
                                getChangeModel={props.getChangeModal}
                                getDeleteModal={props.getDeleteModal}
                                elementTochange="visits"/>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <table>
                    <tr>
                        <th>Time:</th>
                        <td><Time value={new Date(props.visit.dateTime)} format="HH:mm"/></td>
                    </tr>
                    <tr>
                        <th>Purpose:</th>
                        <td>{props.visit.purpose}</td>
                    </tr>
                    <tr>
                        <th>Place:</th>
                        <td>{props.visit.place}</td>
                    </tr>
                    <tr>
                        <th>Description:</th>
                        <td>{props.visit.description}</td>
                    </tr>
                    <tr>
                        <th>Recommendation:</th>
                        <td>{props.visit.recommendation}</td>
                    </tr>
                    {/*<tr>*/}
                    {/*    <th>Files:</th>*/}
                    {/*    <td>{props.visit.files}</td>*/}
                    {/*</tr>*/}
                </table>
            </MDBContainer>
        </MDBCard>
    )
}