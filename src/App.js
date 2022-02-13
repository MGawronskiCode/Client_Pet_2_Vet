import Main from "./Main";
import Login from "./Login";
import {useState} from "react";
import InfoModal from "./components/InfoModal";

export default function App () {

    const loggedKey = "logged";
    const [logged, setLogged] = useState(window.localStorage.getItem(loggedKey));
    const [isShow, setShow] = useState(false);
    const [message, setMessage] = useState("")
    const [messageImage, setMessageImage] = useState();

    return (
        <>
            {isShow &&
                <InfoModal
                    isShow={isShow}
                    setShow={setShow}
                    message={message}
                    messageImage={messageImage}
                    setShowInfoModal={() => setShow(!isShow)}/>}
            {!logged &&
                <Login
                    isShow={isShow}
                    setShowInfoModal={(message, image) => {
                        setMessage(message)
                        setMessageImage(image)
                        setShow(!isShow)
                    }}
                    loggedKey={loggedKey}
                    setLogged={(status) => setLogged(status)} />}
            {logged &&
                <Main />}
        </>
    )
}