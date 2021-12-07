import {Col, Container, Image, Row} from "react-bootstrap";
import '../PetPanel.css'

export default function PetPortrait () {
    return (
        <div>
            <Container>
                <Row className='pet-image-row'>
                    <Col className="pet-image-col">
                        <Image className="pet-image" src="https://i.imgur.com/IKYfb2r.jpg" rounded />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
