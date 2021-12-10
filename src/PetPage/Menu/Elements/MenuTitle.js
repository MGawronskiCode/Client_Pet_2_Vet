import {MDBIcon} from "mdb-react-ui-kit";
import '../../../Styles/Menu.css'

export default function MenuTitle(props) {
    return (
        <div id="menuTitle" >
            <MDBIcon fas icon="user-alt" />&ensp; {props.title}
        </div>
    )
}