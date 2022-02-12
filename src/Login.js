import React, {useState} from 'react';
import {
    MDBBtn,
    MDBCheckbox,
    MDBCol,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTabs,
    MDBTabsContent,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsPane,
} from 'mdb-react-ui-kit';
import './assets/styles/Modal.css'
import LoginImage from './assets/images/LoginImage.png'
import Footer from "./components/Footer";
import {Container, Row} from "react-bootstrap";
import PostData from "./services/PostData";
import './assets/styles/App.css'
import GetData from "./services/GetData";
import {response} from "msw";

export default function Login({loggedKey, setLogged}) {

    const [loginRegisterActive, setLoginRegisterClick] = useState('login');

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    function logIn() {
        const base64 = require('base-64');
        let fetchHeaders = new Headers();
        fetchHeaders.append("Content-Type", "application/json")
        fetchHeaders.append("Authorization", "Basic " + base64.encode(login + ":" + password));
        fetch("/pets", {
            method: 'GET',
            headers: fetchHeaders
        })
            .then(response => {
                console.log(response.status)
                if (response.status === 200) {
                    window.localStorage.setItem(loggedKey, true)
                    setLogged();
                }
            })
    }

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


                                    <MDBInput
                                        className='mb-4' type='email' label='Login'
                                        onChange={(el) => setLogin(el.target.value)}/>
                                    <MDBInput
                                        className='mb-4' type='password' label='Password'
                                        onChange={(el) => setPassword(el.target.value)}/>

                                    <MDBRow className='mb-4'>
                                        <MDBCol className='d-flex justify-content-center'>
                                            <MDBCheckbox
                                                style={{backgroundColor: "#2d3051", borderColor: '#2d3051'}}
                                                id='form7Example4' label='Remember me' defaultChecked/>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBBtn
                                        className='mb-4' block
                                        onClick={logIn}
                                        style={{backgroundColor: '#2d3051'}}>
                                        Sign in
                                    </MDBBtn>

                                    {getSignInMethods()}


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