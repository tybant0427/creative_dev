import React, { Component } from "react";
import Navbar from "./nav";



export default class Landing extends Component {
    render() {
        return (
            <>
            <Navbar />

            <div className ="jumbotron">
                <h1>Welcome to Creative Dev!</h1>
            </div>
            
            </>
        );
    }
}