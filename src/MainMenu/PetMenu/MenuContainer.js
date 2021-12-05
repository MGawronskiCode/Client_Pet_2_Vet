import {Col, Container} from "react-bootstrap";
import MenuElements from "./MenuElements";
import MenuTitle from "./MenuTitle";

export default function MenuContainer() {
    return (
        <div>
            <Container fluid>
                <Col xs={2}>
                    {/*<Logotype />*/}
                    <MenuTitle />
                    <MenuElements />
                </Col>
            </Container>
        </div>
    )
}