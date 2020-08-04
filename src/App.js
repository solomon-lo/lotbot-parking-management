import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  const [currentSum,setCurrentSum]=useState(0);
  const [clear,setClear]=useState(false);

  const Add=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let phone_number=document.querySelector('#phone_number_input').value
    let license_plate=document.querySelector('#license_plate_input').value
    if((phone_number=='') || (license_plate=='')){
      console.log("no input")
    }
    else{
      console.log("new user added")
    }
  }

  const Clear=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let phone_number=document.querySelector('#phone_number_input').value
    let license_plate=document.querySelector('#license_plate_input').value
    if((phone_number=='') || (license_plate=='')){
      console.log("no input")
    }
    else{
      console.log("successfully deleted")
    }
    
  }

  return (
    <div className="App">
      <div className="app-title">
        <h1> Welcome to the ParkingManager! Enter in your phone number and license plate, 
          and select whether you want to book a reservation or cancel an existing one, 
          and our service will send you a confirmation text message!</h1>
      </div>
      <form>
            <input type="text" id="phone_number_input" placeholder="Phone Number"/>   
            <input type="text" id="license_plate_input" placeholder="License Plate" />
            <button onClick={Add}>Add</button>
            <button onClick={Clear}>Clear</button>
      </form>
    </div>
  );
}

export default App;