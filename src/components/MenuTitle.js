import {MDBIcon} from "mdb-react-ui-kit";
import '../assets/styles/Menu.css'

export default function MenuTitle(props) {
    return (
        <div id="menuTitle">
            <MDBIcon fas icon={props.icon}/>&ensp; Menu
        </div>
    )
}