import React, { Component } from "react";
import Navbar from "./nav";
import Icon from '../assets/video/icon.mp4'


export default class Landing extends Component {
    render() {
        return (
            <div>

            <Navbar />

            <div className ="jumbotron">
                <h1>Welcome to Creative Dev!</h1>
            </div>
            <img className="image" src={Icon} width="75%" height="75%"></img>
            
            </div>
        );
    }
}