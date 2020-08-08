import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import "./Waitlist.css";
 
const Waitlist = () => {
    return (
        <div className="App">
          <div className="marginBottomLarge">
            <header>
              <h3 className="logo">
                <div className="lotbot_logo">lotbot</div>
              </h3>
            </header>
            <div className="icon_group"></div>
          </div>
  
          <div className="standardWidth">
            <div className=" marginBottomLarge alignLeft">
              <h1 className="grove">Congratulations 🎉</h1>
              <p className="grove_confirmation">
                You are parking at the Grove Mall
              </p>
            </div>
  
            <div className="marginBottomSmall">
              <div>
                <img alt="" className="grove_mall" src="/grove.png" />
              </div>
            </div>
  
            <div className="standardWidth marginBottomXLarge">
              <div className="marginBottomMedium alignLeft">
                <h4 className="waitlist">You are now #1 on the waitlist.</h4>
              </div>
            </div>
  
            <div className="marginBottomSmall alignRight">
              <button className="cancel" onClick={Clear}>
                Cancel
              </button>
            </div>
          </div>
  
          <footer>
            <p>
              <div className="footerText"> © 2020</div>
            </p>
          </footer>
        </div>
      );
}
 
/*clearing reservation: parses the input data so it can be entered into the function later*/
const Clear = e => {
    e.preventDefault();
    let phone_number = document.querySelector("#phone_number_input").value;
    let license_plate = document.querySelector("#license_plate_input").value;
    if (phone_number == "" && license_plate != "") {
        console.log("no input");
        /*POST command*/
        axios
            .post("https://parking.wtf/api/delete-reservation", {
                phoneNumber: "",
                plateNumber: license_plate
            })
            .then(function (response) {
                console.log(response);
            });
    } else if (phone_number != "" && license_plate == "") {
        console.log("no input");
        /*POST command*/
        const axios = require("axios");
        axios
            .post("https://parking.wtf/api/delete-reservation", {
                phoneNumber: phone_number,
                plateNumber: ""
            })
            .then(function (response) {
                console.log(response);
            });
    }
    console.log("successfully deleted");
};
export default Waitlist;