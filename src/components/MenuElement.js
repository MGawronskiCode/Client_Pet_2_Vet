import React, {useContext} from "react";
import {MDBIcon} from "mdb-react-ui-kit";
import '../assets/styles/Menu.css'
import {PageContext} from "../Main";

export default function MenuElement({setView, icon, title}) {

    const pageContext = useContext(PageContext)

    return (
        <div id="menuElement">
            <p onClick={() => {
                setView();
                pageContext.setSynchronized(!pageContext.synchronized);
            }}>
                <MDBIcon icon={icon}/>&ensp; {title}
            </p>
        </div>
    )
}