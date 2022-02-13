import {MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import '../assets/styles/Footer.css'

export default function Footer() {
    return (

        <MDBContainer fluid>
            <MDBRow>
                <MDBCol size='md' id="left">
                    &copy;{" "}{new Date().getFullYear()}{" "}All rights reserved
                </MDBCol>
                <MDBCol size='md' id="center">
                    Authors
                </MDBCol>
                <MDBCol size='md' id="right">
                    Privacy policy
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    )
}