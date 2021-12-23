import React from "react";
import { Col, Row } from 'react-bootstrap';

export default function PetPanelData(props) {
    return (
        <div>
            <Row>
                <Col>
                    {props.title}
                </Col>
                <Col className='data-field'>
                    {props.content}
                </Col>
            </Row>
        </div>
    )
}
