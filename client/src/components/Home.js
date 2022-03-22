import React, { Component } from "react";
import Navbar from "./nav";
import Icon from '../assets/video/icon.mp4'
import { Image } from "react-bootstrap";

export default class Landing extends Component {
    render() {
        return (
            <div>
            <Navbar />

            <div className ="jumbotron">
                <h1 className="overhead">Welcome to Creative Dev!</h1>
            </div>
<Image src={Icon} className="image2"></Image>
            {/* <img className="image2" src={Icon} width="75%" height="75%"></img> */}
            
            </div>
        );
    }
}