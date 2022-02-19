import React, {createContext, useEffect, useState} from 'react';
import Menu from "./components/Menu";
import {Col, Container, Row} from "react-bootstrap";
import './assets/styles/App.css'
import Footer from "./components/Footer";
import UserView from "./views/UserView";
import DietView from "./views/DietView.js"
import CalendarView from "./views/CalendarView";
import FeedbackView from "./views/FeedbackView";
import SettingsView from "./views/SettingsView";
import PetView from "./views/PetView";
import GetData from "./services/GetData";
import AllPetsView from "./views/AllPetsView";
import VeterinariansView from "./views/VeterinariansView";
import FindVeterinarianView from "./views/FindVeterinarianView";
import UserNotesView from "./views/UserNotesView";
import {View} from './commons/Views'

const PageContext = createContext(null);

export default function Main() {

    const [petId, setPetId] = useState(null);
    const [actualView, setActualView] = useState(View.USER);

    const [isUserMenu, setUserMenu] = useState(true);
    const [isPetMenu, setPetMenu] = useState(false);

    const [isModalShown, setModalShown] = useState(false);

    const [pets, setPets] = useState([]);
    const [actualPet, setActualPet] = useState(null)
    const [petNotes, setPetNotes] = useState([]);
    const [petVisits, setPetVisits] = useState([]);
    const [userNotes, setUserNotes] = useState(null);
    const [dietData, setDietData] = useState(null);
    const [synchronized, setSynchronized] = useState(false);

    useEffect(() => {
        if (actualView === View.USER_NOTES) {
            GetData("/user/notes")
                .then(setUserNotes);
        }
        if (actualView === View.USER) {
            GetData("/pets")
                .then(setPets)
        }
        if (actualView === View.PET) {
            GetData("/pets/" + petId + "/notes")
                .then(setPetNotes);
            GetData("/pets/" + petId)
                .then(setActualPet);
            GetData("/pets/" + petId + "/visits")
                .then(setPetVisits);
        }
        if (actualView === View.DIET) {
            GetData("/pets/" + petId + "/meals")
                .then(setDietData);
        }
    }, [isModalShown, synchronized]);

    const contextValue = {
        setActualView,
        setPetId,
        setUserMenu,
        setPetMenu,
        isUserMenu,
        isPetMenu,
        petId,
        petNotes,
        isModalShown,
        setModalShown,
        synchronized,
        setSynchronized
    }

    return (
        <PageContext.Provider value={contextValue}>
            <div id="page">
                <Container fluid>
                    <Row id="navbarComponent">
                        {actualView}
                    </Row>
                    <Row>
                        <Col id="menuComponent" md={2}>
                            <Menu/>
                        </Col>
                        <Col id="viewComponent">
                            {actualView === View.USER && <UserView pets={pets} />}
                            {actualView === View.PET && actualPet != null && petNotes != null && petVisits != null &&
                                <PetView pet={actualPet} notes={petNotes} visits={petVisits}/>}
                            {actualView === View.USER_NOTES && userNotes != null && <UserNotesView notes={userNotes}/>}
                            {actualView === View.PETS && pets != null && <AllPetsView pets={pets}/>}
                            {actualView === View.VETERINARIANS && <VeterinariansView/>}
                            {actualView === View.FIND_A_VETERINARIAN && <FindVeterinarianView/>}
                            {actualView === View.DIET && dietData != null && <DietView dietData={dietData}/>}
                            {actualView === View.CALENDAR && <CalendarView/>}
                            {actualView === View.FEEDBACK && <FeedbackView/>}
                            {actualView === View.SETTINGS && <SettingsView/>}
                        </Col>
                    </Row>
                    <Row id="footerComponent">
                        <Footer/>
                    </Row>
                </Container>
            </div>
        </PageContext.Provider>
    )
}

export {PageContext}
