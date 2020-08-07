import React, { useState, useEffect, Component } from 'react';
import './App.css';
import axios from 'axios';
import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super()
  }
  componentWillMount() {
  }
  render() {
    return (
      <div className="App">
        <div className="app-title">
          <h1> Welcome to the ParkingManager! Enter in your phone number and license plate,
          and select whether you want to book a reservation or cancel an existing one,
              and our service will send you a confirmation text message!</h1>
        </div>
        <form>
          <input type="text" id="phone_number_input" placeholder="Phone Number" />
          <input type="text" id="license_plate_input" placeholder="License Plate" />
          <button onClick={Add}>Add</button>
          <button onClick={Clear}>Clear</button>
        </form>
      </div>
    );
  }
}



/*adding reservation: parses the input data so it can be entered into the function later*/
const Add = (e) => {
  e.preventDefault();
  let phone_number = document.querySelector('#phone_number_input').value
  let license_plate = document.querySelector('#license_plate_input').value
  console.log(phone_number)
  console.log(license_plate)
  if ((phone_number == '') || (license_plate == '')) {
    console.log("no input")
  }
  else {
    console.log("new user added")
  }

  /*post command*/

  axios.post('https://parking.wtf/api/add-reservation', {
    phoneNumber: phone_number,
    plateNumber: license_plate
  })
    .then(function (response) {
      console.log(response);
    })
}

// (license_plate == ''))
/*clearing reservation: parses the input data so it can be entered into the function later*/
const Clear = (e) => {
  e.preventDefault();
  let phone_number = document.querySelector('#phone_number_input').value
  let license_plate = document.querySelector('#license_plate_input').value
  if ((phone_number == "") && (license_plate != "")) {
    console.log("no input")

    /*POST command*/

    axios.post('https://parking.wtf/api/delete-reservation', {
      phoneNumber: "",  
    plateNumber: license_plate
    })
      .then(function (response) {
        console.log(response);
      })
  }

  else if ((phone_number != '') && (license_plate == "")) {
    console.log("no input")

    /*POST command*/
    const axios = require('axios')

    axios.post('https://parking.wtf/api/delete-reservation', {
      phoneNumber: phone_number,
      plateNumber: ""
    })
      .then(function (response) {
        console.log(response);
      })
  }
  console.log("successfully deleted")
}

export default App;