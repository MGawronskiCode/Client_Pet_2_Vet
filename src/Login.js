import React, {useState} from 'react';
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane, MDBContainer,
} from 'mdb-react-ui-kit';
import './assets/styles/Modal.css'
import LoginImage from './assets/images/LoginImage.png'
import * as url from "url";
import {Select} from "antd";
import Footer from "./components/Footer";
import {Container, Row} from "react-bootstrap";

export default function App() {

    const [loginRegisterActive, setLoginRegisterClick] = useState('login');

    function getSignInMethods() {
        return (
            <div className='text-center mb-3'>
                <p>Sign up with:</p>

                <MDBBtn floating className='mx-1' style={{backgroundColor: '#2d3051'}}>
                    <MDBIcon fab icon='facebook-f'/>
                </MDBBtn>

                <MDBBtn floating className='mx-1' style={{backgroundColor: '#2d3051'}}>
                    <MDBIcon fab icon='google'/>
                </MDBBtn>

            </div>
        )
    }

    return (
        <Container fluid>
            <Row id="navbarComponent">
                NavBar component
            </Row>

            <div style={{
                height: '90vh',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: `url(${LoginImage})`
            }}>

                <Row>
                    <div style={{
                        width: '26rem',
                        backgroundColor: "white",
                        borderStyle: "groove",
                        borderWidth: '2px',
                        borderColor: '#2d3051',
                        borderRadius: '10px'
                    }}>
                        <div style={{margin: '10px'}}>
                            <MDBTabs pills justify className='mb-3'>
                                <MDBTabsItem>
                                    <MDBTabsLink
                                        style={{backgroundColor: loginRegisterActive === 'login' ? '#2d3051' : ''}}
                                        onClick={() => setLoginRegisterClick('login')}
                                        active={loginRegisterActive === 'login'}>
                                        Login
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink
                                        style={{backgroundColor: loginRegisterActive === 'register' ? '#2d3051' : ''}}
                                        onClick={() => setLoginRegisterClick('register')}
                                        active={loginRegisterActive === 'register'}>
                                        Register
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>

                            <MDBTabsContent>
                                <MDBTabsPane show={loginRegisterActive === 'login'}>
                                    <form>

                                        <MDBInput className='mb-4' type='email' label='Login'/>
                                        <MDBInput className='mb-4' type='password' label='Password'/>

                                        <MDBRow className='mb-4'>
                                            <MDBCol className='d-flex justify-content-center'>
                                                <MDBCheckbox
                                                    style={{backgroundColor: "#2d3051", borderColor: '#2d3051'}}
                                                    id='form7Example3' label='Remember me' defaultChecked/>
                                            </MDBCol>
                                        </MDBRow>

                                        <MDBBtn
                                            type='submit' className='mb-4' block
                                            style={{backgroundColor: '#2d3051'}}>
                                            Sign in
                                        </MDBBtn>

                                        {getSignInMethods()}

                                    </form>
                                </MDBTabsPane>
                                <MDBTabsPane show={loginRegisterActive === 'register'}>
                                    <form>

                                        <MDBInput className='mb-4' type='text' label='Name'/>
                                        <div className='mb-4'>
                                            <select className="form-select">
                                                <option value="0">Male</option>
                                                <option value="1">Female</option>
                                            </select>
                                        </div>
                                        <MDBInput className='mb-4' type='email' label='Login'/>
                                        <MDBInput className='mb-4' type='password' label='Password'/>

                                        <MDBRow className='mb-4'>
                                            <MDBCol className='d-flex justify-content-center'>
                                                <MDBCheckbox
                                                    style={{
                                                        backgroundColor: loginRegisterActive ? "#2d3051" : "white",
                                                        borderColor: '#2d3051'
                                                    }}
                                                    id='form7Example3' label='I have read and agree to the terms'
                                                    defaultChecked/>
                                            </MDBCol>
                                        </MDBRow>

                                        <MDBBtn
                                            type='submit' className='mb-4' block
                                            style={{backgroundColor: '#2d3051'}}>
                                            Sign in
                                        </MDBBtn>

                                        {getSignInMethods()}

                                    </form>
                                </MDBTabsPane>
                            </MDBTabsContent>
                        </div>
                    </div>
                </Row>
            </div>
            <Row id="footerComponent">
                <Footer/>
            </Row>
        </Container>
    );
}