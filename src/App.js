import Main from "./Main";
import Login from "./Login";
import {useState} from "react";
import InfoModal from "./components/InfoModal";

export default function App () {

    const loggedKey = "logged";
    const [logged, setLogged] = useState(window.localStorage.getItem(loggedKey));
    const [isShow, setShow] = useState(false);

    // console.log(window.localStorage.getItem("logged"))
    // response.json().then(data => console.log(data))

    return (
        <>
            {isShow &&
                <InfoModal
                    isShow={isShow}
                    setShow={setShow}
                    setShowInfoModal={() => setShow(!isShow)}/>}
            {!logged &&
                <Login
                    isShow={isShow}
                    setShowInfoModal={() => setShow(!isShow)}
                    loggedKey={loggedKey}
                    setLogged={(status) => setLogged(status)} />}
            {logged &&
                <Main />}
        </>
    )
}