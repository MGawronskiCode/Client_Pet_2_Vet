import React, {useContext} from "react";
import {PageContext} from "../Main";
import MenuTitle from "./MenuTitle";
import Logotype from "./Logotype";
import MenuElement from "./MenuElement";

export default function Menu() {

    const pageContext = useContext(PageContext)

    return (
        <>
            <Logotype/>
            <MenuTitle icon={pageContext.isUserMenu ? "user-alt" : "paw"}/>

            {pageContext.isUserMenu &&
                <MenuElement
                    setView={pageContext.setCurrentView}
                    view={pageContext.view.USER_NOTES}
                    icon="sticky-note"
                    title="Notes"/>
            }

            {pageContext.isPetMenu &&
                <MenuElement
                    setView={pageContext.setCurrentView}
                    view={pageContext.view.PETS}
                    icon="heart"
                    title="Your Pets"/>
            }

            <MenuElement
                setView={pageContext.setCurrentView}
                view={pageContext.view.VETERINARIANS}
                icon="user-md"
                title="Veterinarians"/>

            <MenuElement
                setView={pageContext.setCurrentView}
                view={pageContext.view.FIND_A_VETERINARIAN}
                icon="map-marked-alt"
                title="Find a Veterinarian"/>

            {pageContext.isPetMenu &&
                <MenuElement
                    setView={pageContext.setCurrentView}
                    view={pageContext.view.DIET}
                    icon="drumstick-bite"
                    title="Diet module"/>
            }

            <MenuElement
                setView={pageContext.setCurrentView}
                view={pageContext.view.CALENDAR}
                icon="calendar-alt"
                title="Calendar"/>

            <MenuElement
                setView={pageContext.setCurrentView}
                view={pageContext.view.FEEDBACK}
                icon="paper-plane"
                title="Send feedback"/>

            <MenuElement
                setView={pageContext.setCurrentView}
                view={pageContext.view.SETTINGS}
                icon="cog"
                title="Settings"/>
        </>
    )
}