import {Col, Container} from "react-bootstrap";
import MenuTitle from "../MenuTitle";
import MenuElements from './MenuElements'
import Logotype from "../Logotype";

export default function MenuContainer() {
    return (
        <div>
            <Container fluid>
                <Col xs={2}>
                    {/*<Logotype />*/}
                    <MenuTitle title="Menu" />
                    <MenuElements />
                </Col>
            </Container>
        </div>
    )
}