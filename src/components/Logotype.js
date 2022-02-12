import {Container, Image} from "react-bootstrap";
import image from  "../assets/images/Logotype.png";
import {useContext} from "react";
import {PageContext} from "../Main";

export default function Logotype() {

    const pageContext = useContext(PageContext)

    function changeView() {
        pageContext.setUserMenu(true);
        pageContext.setPetMenu(false);
        pageContext.setCurrentView(pageContext.view.USER);
    }

    return (
        <>
            <Container>
                <Image id="logotype" width={150} height={150} srcSet={image} rounded onClick={changeView}/>
            </Container>
        </>
    )
}
