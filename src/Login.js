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
import './assets/styles/App.css'
import ThinkingMan from "./assets/images/thinking_man.png";
import Successful from "./assets/images/Successful.png"

// TODO: 1. Form validation. 2. Error handling (in request). 3. Checkbox
export default function Login({loggedKey, setLogged, setShowInfoModal}) {

    const base64 = require('base-64');
    const fetchHeaders = new Headers();

    const [loginRegisterActive, setLoginRegisterActive] = useState('login');

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const [name, setName] = useState("");
    const [sex, setSex] = useState("0");
    const [loginForRegistration, setLoginForRegistration] = useState("");
    const [passwordForRegistration, setPasswordForRegistration] = useState("");
    const [role, setRole] = useState("ROLE_OWNER");

    function logIn() {
        fetchHeaders.append("Authorization", "Basic " + base64.encode(login + ":" + password));
        fetch("/login", {
            method: 'POST',
            headers: fetchHeaders
        }).then(response => {
            if (response.status === 200) {
                window.localStorage.setItem(loggedKey, true)
                setLogged(true);
            }
            if (response.status === 401) {
                setShowInfoModal("Something went wrong...", ThinkingMan)
            }
        })
        setNullValue();
    }

    function register() {
        const data = {
            "name": name,
            "sex": sex,
            "login": loginForRegistration,
            "role": role
        }
        let options = {
            method: 'POST',
            headers: {
                'password': passwordForRegistration,
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        }
        fetch("/users", options).then(response => {
            if (response.status === 201) {
                setShowInfoModal("Registration completed", Successful)
            }
        })
        setNullValue();
    }

    function setNullValue() {
        setLogin("");
        setPassword("");
        setName("");
        setSex("0");
        setLoginForRegistration("");
        setPasswordForRegistration("");
        setRole("ROLE_OWNER");
    }

    function getSignInMethods() {
        return (
            <div className='text-center mb-2'>
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
                                        onClick={() => setLoginRegisterActive('login')}
                                        active={loginRegisterActive === 'login'}>
                                        Login
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink
                                        style={{backgroundColor: loginRegisterActive === 'register' ? '#2d3051' : ''}}
                                        onClick={() => setLoginRegisterActive('register')}
                                        active={loginRegisterActive === 'register'}>
                                        Register
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>

                            <MDBTabsContent>
                                <MDBTabsPane show={loginRegisterActive === 'login'}>

                                    <MDBInput
                                        className='mb-2' type='email' label='Login'
                                        value={login} onChange={(el) => setLogin(el.target.value)}/>
                                    <MDBInput
                                        className='mb-2' type='password' label='Password'
                                        value={password} onChange={(el) => setPassword(el.target.value)}/>

                                    <MDBRow className='mb-2'>
                                        <MDBCol className='d-flex justify-content-center'>
                                            <MDBCheckbox
                                                style={{backgroundColor: "#2d3051", borderColor: '#2d3051'}}
                                                id='form7Example4' label='Remember me' defaultChecked/>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBBtn
                                        className='mb-2' block
                                        onClick={logIn}
                                        style={{backgroundColor: '#2d3051'}}>
                                        Sign in
                                    </MDBBtn>

                                    {getSignInMethods()}
                                </MDBTabsPane>

                                <MDBTabsPane show={loginRegisterActive === 'register'}>

                                    <MDBInput
                                        className='mb-2' type='text' label='Name'
                                        value={name} onChange={(el) => setName(el.target.value)}/>
                                    <div className='mb-2'>
                                        <select
                                            className="form-select"
                                            onChange={(el) => setSex(el.target.valueOf().value)}>
                                            <option value="0">Male</option>
                                            <option value="1">Female</option>
                                        </select>
                                    </div>
                                    <MDBInput
                                        className='mb-2' type='email' label='Login'
                                        value={loginForRegistration}
                                        onChange={(el) => setLoginForRegistration(el.target.value)}/>
                                    <MDBInput
                                        className='mb-2' type='password' label='Password'
                                        value={passwordForRegistration}
                                        onChange={(el) => setPasswordForRegistration(el.target.value)}/>
                                    <div className='mb-2'>
                                        <select
                                            className="form-select"
                                            onChange={(el) => setRole(el.target.valueOf().value)}>
                                            <option value="ROLE_OWNER">Owner</option>
                                            <option value="ROLE_VET" disabled={true}>Vet</option>
                                        </select>
                                    </div>

                                    <MDBRow className='mb-2'>
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
                                        className='mb-2' block
                                        onClick={register}
                                        style={{backgroundColor: '#2d3051'}}>
                                        Sign in
                                    </MDBBtn>

                                    {getSignInMethods()}
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