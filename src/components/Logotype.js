import {Container, Image} from "react-bootstrap";
import image from "../assets/images/Logotype.png";
import {useContext} from "react";
import {PageContext} from "../Main";
import {View} from "../commons/Views";
import {MenuNavigation} from "../commons/MenuNavigation";

export default function Logotype() {

    const pageContext = useContext(PageContext)

    function changeView() {
        pageContext.setActualMenu(pageContext.actualMenu === MenuNavigation.USER_MENU ? MenuNavigation.PET_MENU : MenuNavigation.USER_MENU);
        pageContext.setActualView(View.USER);
    }

    return (
        <>
            <Container>
                <Image id="logotype" width={150} height={150} srcSet={image} rounded onClick={changeView}/>
            </Container>
        </>
    )
}
