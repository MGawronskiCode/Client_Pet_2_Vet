import Main from "./Main";
import Login from "./Login";
import {useState} from "react";

export default function App () {

    const loggedKey = "logged";
    const [logged, setLogged] = useState(window.localStorage.getItem(loggedKey));

    // console.log(window.localStorage.getItem("logged"))
    // response.json().then(data => console.log(data))

    return (
        <>
            {!logged && <Login loggedKey={loggedKey} setLogged={() => setLogged(true)} />}
            {logged && <Main />}
        </>
    )
}