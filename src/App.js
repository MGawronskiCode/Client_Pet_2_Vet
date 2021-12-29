import React, {createContext, useEffect, useState} from 'react';
import Menu from "./components/Menu";
import {Col, Container, Row} from "react-bootstrap";
import './assets/styles/App.css'
import Footer from "./components/Footer";
import UserView from "./views/UserView";
import UserNotesView from "./views/UserNotesView";
import Views from "./commons/Views";
import AllPetsView from "./views/AllPetsView";
import VeterinariansView from "./views/VeterinariansView";
import FindVeterinarianView from "./views/FindVeterinarianView";
import DietView from "./views/DietView.js"
import CalendarView from "./views/CalendarView";
import FeedbackView from "./views/FeedbackView";
import SettingsView from "./views/SettingsView";
import PetView from "./views/PetView";
import GetData from "./services/GetData";

const PageContext = createContext(null);

export default function App() {

    // TODO: change userId with logging procedure. Change petId to null
    const [userId, setUserId] = useState(2);
    const [petId, setPetId] = useState(3);

    const [isUserMenu, setUserMenu] = useState(true);
    const [isPetMenu, setPetMenu] = useState(false);

    const [isUserView, setUserView] = useState(true);
    const [isPetView, setPetView] = useState(false);
    const [isUserNotesView, setUserNotesView] = useState(false);
    const [isAllPetsView, setAllPetsView] = useState(false);
    const [isVeterinariansView, setVeterinariansView] = useState(false);
    const [isFindVeterinarianView, setFindVeterinarianView] = useState(false);
    const [isDietView, setDietView] = useState(false);
    const [isCalendarView, setCalendarView] = useState(false);
    const [isFeedbackView, setFeedbackView] = useState(false);
    const [isSettingsView, setSettingsView] = useState(false);
    const [isModalShown, setModalShown] = useState(false);

    const view = Views();

    function setCurrentView(view) {
        view === "user" ? setUserView(true) : setUserView(false);
        view === "pet" ? setPetView(true) : setPetView(false);
        view === "userNotes" ? setUserNotesView(true) : setUserNotesView(false);
        view === "pets" ? setAllPetsView(true) : setAllPetsView(false);
        view === "veterinarians" ? setVeterinariansView(true) : setVeterinariansView(false);
        view === "findVeterinarians" ? setFindVeterinarianView(true) : setFindVeterinarianView(false);
        view === "diet" ? setDietView(true) : setDietView(false);
        view === "calendar" ? setCalendarView(true) : setCalendarView(false);
        view === "feedback" ? setFeedbackView(true) : setFeedbackView(false);
        view === "settings" ? setSettingsView(true) : setSettingsView(false);
    }


    const [pets, setPets] = useState(null);
    const [petNotes, setPetNotes] = useState(null);
    const [userNotes, setUserNotes] = useState(null);
    const [dietData, setDietData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (isUserNotesView) {
            GetData("http://localhost:8080/users/" + userId + "/notes")
                .then(setUserNotes);
        }
        console.log(isLoading);
        if (isLoading) {
            GetData("http://localhost:8080/users/" + userId + "/pets")
                .then(setPets)
                .then(() => setLoading(false));
            console.log(isLoading);
        }
        if (isPetView) { //true
            GetData("http://localhost:8080/pets/" + petId + "/notes")
                .then(setPetNotes);
        }
        if (isDietView) {
            GetData("http://localhost:8080/pets/" + petId + "/meals")
                .then(setDietData);
        }

        // TODO made endpoint to "Veterinarians" at back-end side
        // const veterinarians = ...

    }, [isUserView, isPetView, isUserNotesView, isAllPetsView, isVeterinariansView, isFindVeterinarianView,
        isDietView, isCalendarView, isFeedbackView, isSettingsView, isModalShown, petNotes, isLoading]);


    const contextValue = {
        setCurrentView,
        setPetId,
        setUserMenu,
        setPetMenu,
        view,
        isUserMenu,
        isPetMenu,
        userId,
        petId,
        petNotes,
        isModalShown,
        setModalShown,
        setLoading,
        isLoading
    }

    return (
        <PageContext.Provider value={contextValue}>
            <div id="page">
                <Container fluid>
                    <Row id="navbarComponent">
                        NavBar component
                    </Row>
                    <Row>
                        <Col id="menuComponent" md={2}>
                            <Menu/>
                        </Col>
                        <Col id="viewComponent">
                            {isUserView && pets != null && <UserView pets={pets} />}
                            {isPetView && petNotes != null && <PetView notes={petNotes}/>}
                            {isUserNotesView && userNotes != null && <UserNotesView notes={userNotes}/>}
                            {isAllPetsView && pets != null && <AllPetsView pets={pets}/>}
                            {isVeterinariansView && <VeterinariansView/>}
                            {isFindVeterinarianView && <FindVeterinarianView/>}
                            {isDietView && dietData != null && <DietView dietData={dietData}/>}
                            {isCalendarView && <CalendarView/>}
                            {isFeedbackView && <FeedbackView/>}
                            {isSettingsView && <SettingsView/>}
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
