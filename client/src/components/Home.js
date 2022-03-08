import React, { Component } from "react";
import Navbar from "./nav";
import Icon from '../assets/video/icon.mp4'


export default class Landing extends Component {
    render() {
        return (
            <div>
                   <video autoPlay loop muted 
    style={{
      position: "fixed",
// width:"100%",
// left: "50%",
// top: "50%",
// height: "100%",
// objectFit: "cover",
// backgroundSize: "cover",
// transform: "translate(-50%, -50%)",
zIndex: "1"
    }}
    >
      <source src={Icon} type="video/mp4" />
    </video>
            <Navbar />


     


            <div className ="jumbotron">
                <h1>Welcome to Creative Dev!</h1>
            </div>
            
            </div>
        );
    }
}