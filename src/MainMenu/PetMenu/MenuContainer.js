import {Col, Container, Image, Row} from "react-bootstrap";
import {MDBIcon} from "mdb-react-ui-kit";
import Elements from "./Elements";
import BottomElements from "../UserMenu/BottomElements";

export default function MenuContainer() {
    return (
        <div>
            <Container fluid>
                <Col xs={2}>

                    {/* TODO doesn't work image src with local storage */}

                    <Container>
                        <Row>
                            <Col xs={3} md={4} className="text-center">
                                <Image src="https://i.imgur.com/NaKUxvK.jpeg" rounded />
                            </Col>
                        </Row>
                    </Container>

                    <div className="text-center">
                        <MDBIcon fas icon="user-alt" /> Menu
                    </div>

                    <Elements />
                    <BottomElements />
                </Col>
            </Container>
        </div>
    )
}