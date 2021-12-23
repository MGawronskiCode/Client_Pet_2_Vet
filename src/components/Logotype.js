import {Container, Image} from "react-bootstrap";
import image from  "../assets/images/Logotype.png";

export default function Logotype() {

    return (
        <>
            <Container>
                <Image width={150} height={150} srcSet={image} rounded/>
            </Container>
        </>
    )
}
