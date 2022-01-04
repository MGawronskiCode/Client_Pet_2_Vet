import React, {useState} from "react";
import CardElementContent from "./CardElementContent";
import {MDBCard, MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import CardElementImage from "./CardElementImage";

export default function CardElement(props) {

    const [disabled, setDisabled] = useState(true);

    return (

        <MDBCard
            id="element"
            onMouseOver={() => setDisabled(false)}
            onMouseOut={() => setDisabled(true)}>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="2" center>
                        <CardElementImage
                            image={props.image}/>
                    </MDBCol>

                    <MDBCol md="10">
                        <MDBContainer style={{textAlign: "center"}}>
                            <MDBRow>
                                <MDBCol md="10">
                                    <h5>{props.element.title}</h5>
                                </MDBCol>
                                <MDBCol md="2" center>
                                    <CardElementContent
                                        content={props.element.content}
                                        disabled={disabled}
                                        getDeleteModal={props.getDeleteModal}
                                        getChangeModel={props.getChangeModal}
                                        getObjectToChange={props.getObjectToChange}
                                        id={props.element.id}/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                {props.element.content}
                            </MDBRow>
                        </MDBContainer>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>
        </MDBCard>
    )
}