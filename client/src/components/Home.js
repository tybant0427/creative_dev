import React, { Component } from "react";
import Navbar from "./nav";
import Icon from '../assets/video/icon.mp4'
import { Image } from "react-bootstrap";

export default class Landing extends Component {
    render() {
        return (
            <div>
            <Navbar />
<Image src={Icon} className="image2"></Image>

            <div className ="jumbotron">
                <h1>Welcome to Creative Dev!</h1>
            </div>
            <img className="image" src={Icon} width="75%" height="75%"></img>
            
            </div>
        );
    }
}