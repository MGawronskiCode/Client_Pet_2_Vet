import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import reportWebVitals from './reportWebVitals';
import UserMenu from "./MainMenu/UserMenu/UserMenu";
import PetMenu from "./MainMenu/PetMenu/PetMenu";

ReactDOM.render(
    <React.StrictMode>
        <PetMenu />
        {/*<UserMenu />*/}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
