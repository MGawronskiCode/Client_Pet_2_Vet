import React, {createContext, useState} from 'react';
import Menu from "./components/Menu";
import {Col, Container, Row} from "react-bootstrap";
import './assets/styles/App.css'
import Footer from "./components/Footer";
import UserView from "./views/UserView";
import UserNotesView from "./views/UserNotesView";
import Views from "./commons/Views";
import MenuService from "./services/MenuService";
import PetsView from "./views/PetsView";
import VeterinariansView from "./views/VeterinariansView";
import FindVeterinarianView from "./views/FindVeterinarianView";
import DietView from "./views/DietView.js"
import CalendarView from "./views/CalendarView";
import FeedbackView from "./views/FeedbackView";
import SettingsView from "./views/SettingsView";

const PageContext = createContext(null);

export default function App() {

    // TODO: change userId with logging procedure. Change petId to null
    const [userId, setUserId] = useState(2);
    const [petId, setPetId] = useState(3);

    const [isUserMenu, setUserMenu] = useState(true);
    const [isPetMenu, setPetMenu] = useState(false);

    const [isUserView, setUserView] = useState(true);
    const [isUserNotesView, setUserNotesView] = useState(false);
    const [isPetsView, setPetsView] = useState(false);
    const [isVeterinariansView, setVeterinariansView] = useState(false);
    const [isFindVeterinarianView, setFindVeterinarianView] = useState(false);
    const [isDietView, setDietView] = useState(false);
    const [isCalendarView, setCalendarView] = useState(false);
    const [isFeedbackView, setFeedbackView] = useState(false);
    const [isSettingsView, setSettingsView] = useState(false);

    const view = Views();

    function setCurrentView(view) {
        view === "user" ? setUserView(true) : setUserView(false);
        view === "userNotes" ? setUserNotesView(true) : setUserNotesView(false);
        view === "pets" ? setPetsView(true) : setPetsView(false);
        view === "veterinarians" ? setVeterinariansView(true) : setVeterinariansView(false);
        view === "findVeterinarians" ? setFindVeterinarianView(true) : setFindVeterinarianView(false);
        view === "diet" ? setDietView(true) : setDietView(false);
        view === "calendar" ? setCalendarView(true) : setCalendarView(false);
        view === "feedback" ? setFeedbackView(true) : setFeedbackView(false);
        view === "settings" ? setSettingsView(true) : setSettingsView(false);
    }

    const userNotes = MenuService("http://localhost:8080/users/" + userId + "/notes");
    // TODO: fix endpoint at backend side. For such endpoint we get all pets from DB, not User's pet => should be like "http://localhost:8080/<userId>/pets"
    const pets = MenuService("http://localhost:8080/pets");
    // TODO made endpoint to "Veterinarians" at back-end side
    //
    const dietData = MenuService("http://localhost:8080/pets/" + petId + "/meals");

    const contextValue = {
        setCurrentView,
        view,
        isUserMenu,
        isPetMenu,
        userId
    }

    return (
        <PageContext.Provider value={contextValue}>
            <div>
                <Container fluid>
                    <Row id="navbarComponent">
                        NavBar component
                    </Row>
                    <Row>
                        <Col id="menuComponent" md={2}>
                            <Menu/>
                        </Col>
                        <Col id="viewComponent">
                            {isUserView && <UserView />}
                            {isUserNotesView && <UserNotesView notes={userNotes}/>}
                            {isPetsView && <PetsView pets={pets} />}
                            {isVeterinariansView && <VeterinariansView />}
                            {isFindVeterinarianView && <FindVeterinarianView />}
                            {isDietView && <DietView dietData={dietData}/>}
                            {isCalendarView && <CalendarView />}
                            {isFeedbackView && <FeedbackView />}
                            {isSettingsView && <SettingsView />}
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
