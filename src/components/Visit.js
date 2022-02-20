import {MDBCard, MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import CardElementImage from "./CardElementImage";
import CardElementContent from "./CardElementContent";
import React, {useState} from "react";
import Time from "react-time";

export default function Visit({visit, image, setShow, setCurrentElement, setCurrentOperation, setElementToChange}) {

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
                                image={image}/>
                        </MDBCol>
                        <MDBCol center md="8">
                            <h5>Visit <Time value={new Date(visit.dateTime)} format="DD MMM YYYY"/></h5>
                        </MDBCol>
                        <MDBCol center md="2">
                            <CardElementContent
                                element="history"
                                id={visit.id}
                                disabled={disabled}
                                setShow={setShow}
                                setCurrentElement={setCurrentElement}
                                setCurrentOperation={setCurrentOperation}
                                setElementToChange={setElementToChange}
                            />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <table>
                    <tbody>
                    <tr>
                        <th>Time:</th>
                        <td><Time value={new Date(visit.dateTime)} format="HH:mm"/></td>
                    </tr>
                    <tr>
                        <th>Purpose:</th>
                        <td>{visit.purpose}</td>
                    </tr>
                    <tr>
                        <th>Place:</th>
                        <td>{visit.place}</td>
                    </tr>
                    <tr>
                        <th>Description:</th>
                        <td>{visit.description}</td>
                    </tr>
                    <tr>
                        <th>Recommendation:</th>
                        <td>{visit.recommendation}</td>
                    </tr>
                    {/*<tr>*/}
                    {/*    <th>Files:</th>*/}
                    {/*    <td>{visit.files}</td>*/}
                    {/*</tr>*/}
                    </tbody>
                </table>
            </MDBContainer>
        </MDBCard>
    )
}