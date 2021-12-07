import {Col, Container, Image, Row} from "react-bootstrap";

export default function Logotype () {

    {/* TODO doesn't work image src with local storage */}
    return (
        <div id='logotype'>
            <Container>
                <Row>
                    <Col xs={3} md={4} className="text-center">
                        <Image src="https://i.imgur.com/NaKUxvK.jpeg" rounded />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
