import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./Styles/index.scss";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
// import * as serviceWorker from "./serviceWorker";
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
// serviceWorker.unregister();
