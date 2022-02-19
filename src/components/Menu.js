import React, {useContext} from "react";
import {PageContext} from "../Main";
import MenuTitle from "./MenuTitle";
import Logotype from "./Logotype";
import MenuElement from "./MenuElement";
import {View} from "../commons/Views"

export default function Menu() {

    const pageContext = useContext(PageContext)

    return (
        <>
            <Logotype/>
            <MenuTitle icon={pageContext.isUserMenu ? "user-alt" : "paw"}/>

            {pageContext.isUserMenu &&
                <MenuElement
                    setView={() => pageContext.setActualView(View.USER_NOTES)}
                    icon="sticky-note"
                    title="Notes"/>
            }

            {pageContext.isPetMenu &&
                <MenuElement
                    setView={() => pageContext.setActualView(View.PETS)}
                    icon="heart"
                    title="Your Pets"/>
            }

            <MenuElement
                setView={() => pageContext.setActualView(View.VETERINARIANS)}
                icon="user-md"
                title="Veterinarians"/>

            <MenuElement
                setView={() => pageContext.setActualView(View.FIND_A_VETERINARIAN)}
                icon="map-marked-alt"
                title="Find a Veterinarian"/>

            {pageContext.isPetMenu &&
                <MenuElement
                    setView={() => pageContext.setActualView(View.DIET)}
                    icon="drumstick-bite"
                    title="Diet module"/>
            }

            <MenuElement
                setView={() => pageContext.setActualView(View.CALENDAR)}
                icon="calendar-alt"
                title="Calendar"/>

            <MenuElement
                setView={() => pageContext.setActualView(View.FEEDBACK)}
                icon="paper-plane"
                title="Send feedback"/>

            <MenuElement
                setView={() => pageContext.setActualView(View.SETTINGS)}
                icon="cog"
                title="Settings"/>
        </>
    )
}