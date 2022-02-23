import React, {useState} from "react";
import CardElementContent from "./CardElementContent";
import {MDBCard, MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import CardElementImage from "./CardElementImage";

export default function CardElement({element, image, setShow, setCurrentElement, setCurrentOperation, setElementToChange}) {

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
                            image={image}/>
                    </MDBCol>

                    <MDBCol md="10">
                        <MDBContainer style={{textAlign: "center"}}>
                            <MDBRow>
                                <MDBCol md="10">
                                    <h5>{element.title}</h5>
                                </MDBCol>
                                <MDBCol md="2" center>
                                    <CardElementContent
                                        id={element.id}
                                        element="petNote"
                                        disabled={disabled}
                                        setShow={setShow}
                                        setCurrentElement={setCurrentElement}
                                        setCurrentOperation={setCurrentOperation}
                                        setElementToChange={setElementToChange}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                {element.content}
                            </MDBRow>
                        </MDBContainer>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>
        </MDBCard>
    )
}