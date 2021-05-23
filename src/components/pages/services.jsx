import React, { Component } from "react";
import "./style.css";
import img1 from "../assets/bd.png";
import img2 from "../assets/ms.png";
import img3 from "../assets/ts.png";

class Services extends Component {
  state = {};
  render() {
    return (
      <div className="services">
        <div className="uppersec">
          <h1>Select your service to get started</h1>
        </div>

        <div className="service-container">
          <div className="service">
            <img src={img1} />
            <h2>Breakdown Support</h2>
            <p>Request Assistance from a mechanic on your location</p>
            <button className="btn btn-primary sm">Request</button>
          </div>
          <div className="service">
            <img src={img2} />
            <h2>Car Maintenance</h2>
            <p>
              Check your car's health at your doorstep or at a nearby garage
            </p>
            <button className="btn btn-primary sm">Request</button>
          </div>

          <div className="service">
            <img src={img3} />
            <h2>Towing Support</h2>
            <p>Request towing assistance from a nearby service</p>
            <button className="btn btn-primary sm">Request</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
