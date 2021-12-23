import React, {useState} from "react";
import CardElementContent from "./CardElementContent";
import {MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import CardElementImage from "./CardElementImage";

export default function CardElement(props) {

    const [disabled, setDisabled] = useState(true);

    return (
        <div
            onMouseOver={() => setDisabled(false)}
            onMouseOut={() => setDisabled(true)}>

            <div>
                <MDBCard id="element">
                    <MDBCardBody>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md="2" className='col-example'>
                                    <CardElementImage
                                        image={props.image}/>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCardTitle>
                                        {props.element.title}
                                    </MDBCardTitle>
                                    <MDBCardText>
                                        <div>
                                            <CardElementContent
                                                content={props.element.content}
                                                disabled={disabled}
                                                getDeleteModal={props.getDeleteModal} 
                                                getChangeModel={props.getChangeModal}
                                                getObjectToChange={props.getObjectToChange}
                                                id={props.element.id}/>
                                        </div>
                                    </MDBCardText>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </div>
    )
}