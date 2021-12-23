import React from 'react';
import {Col, Row} from 'react-bootstrap';
import PetPanelData from './PetPanelData';
import PetPanelImage from './PetPanelImage';
import '../assets/styles/PetPanel.css';

export default function PetPanel() {
    return (
        <div id="pet-panel">
            <Row>
                <Col id='pet-image-col' xs={5}>
                    <PetPanelImage/>
                </Col>
                <Col id='pet-data-column' xs={6}>
                    <Row className='data-row'>
                        <PetPanelData title="Name" content="Eyrie"/>
                    </Row>
                    <Row className='data-row'>
                        <PetPanelData title="Owner" content="Mr. X"/>
                    </Row>
                    <Row className='data-row'>
                        <Col>
                            <PetPanelData title="Sex" content="Female"/>
                        </Col>
                        <Col>
                            <PetPanelData title="Date of birth" content="27.10.2018"/>
                        </Col>
                    </Row>
                    <Row className='data-row'>
                        <Col>
                            <PetPanelData title="Kind" content="Cat"/>
                        </Col>
                        <Col>
                            <PetPanelData title="Breed" content="Maine Coon"/>
                        </Col>
                    </Row>
                    <Row className='data-row'>
                        <Col>
                            <PetPanelData title="Weight" content="5.2 kg"/>
                        </Col>
                        <Col>
                            <PetPanelData title="Chip No." content="234567"/>
                        </Col>
                    </Row>
                </Col>
                <Col xs={1}> </Col>
            </Row>
        </div>
    );
}
