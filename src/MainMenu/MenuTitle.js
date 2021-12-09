import {MDBIcon} from "mdb-react-ui-kit";
import './Menu.css'

export default function MenuTitle(props) {
    return (
        <div id="menu-title">
            <MDBIcon fas icon="user-alt" />&ensp; {props.title}
        </div>
    )
}
