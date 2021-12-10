import React from 'react';
import {Col, Row} from 'react-bootstrap';
import DataColumn from './Elements/DataColumn';
import PetPortrait from './Elements/PetPortrait';
import '../../Styles/PetPanel.css';

export default function PetPanel() {
    return (
        <div id="pet-panel">
            <Row>
                <Col id='pet-image-col' xs={5}>
                    <PetPortrait/>
                </Col>
                <Col id='pet-data-column' xs={6}>
                    <Row className='data-row'>
                        <DataColumn title="Name" content="Eyrie"/>
                    </Row>
                    <Row className='data-row'>
                        <DataColumn title="Owner" content="Mr. X"/>
                    </Row>
                    <Row className='data-row'>
                        <Col>
                            <DataColumn title="Sex" content="Female"/>
                        </Col>
                        <Col>
                            <DataColumn title="Date of birth" content="27.10.2018"/>
                        </Col>
                    </Row>
                    <Row className='data-row'>
                        <Col>
                            <DataColumn title="Kind" content="Cat"/>
                        </Col>
                        <Col>
                            <DataColumn title="Breed" content="Maine Coon"/>
                        </Col>
                    </Row>
                    <Row className='data-row'>
                        <Col>
                            <DataColumn title="Weight" content="5.2 kg"/>
                        </Col>
                        <Col>
                            <DataColumn title="Chip No." content="234567"/>
                        </Col>
                    </Row>
                </Col>
                <Col xs={1}> </Col>
            </Row>
        </div>
    );
}
