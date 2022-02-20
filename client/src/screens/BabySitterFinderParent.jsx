import * as React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import BabySitterFinderScreen from "./BabySitterFinderScreen"
import Availability from "../components/Availability"

import Map from '../components/Map';

const BabySitterFinderParent = () => {
const [babySitters, setBabySitters] = useState([])
const [locations, setLocations] = useState ([])
const [token, setToken] = useState("");
const [babysitter, setBabysitter] = useState({});
const [user, setuser] = useState({});

const [babysitterAvailabilty, setBabysitterAvailability] = useState(babysitter?.available);
const [booking, setBooking] = useState({});

const getBabySitters = () => {
  const babySitterUrl = "http://localhost:8080/api/babysitter" //use path and set proxy
  //runs when page loads
  axios.get(babySitterUrl)

    .then((response) => {
      console.log("WORKING")
      setBabySitters(response.data.babysitter)
    })
}

console.log("TEST")
 useEffect(() => {
  getBabySitters();
 }, [])

console.log("BabySitters here: ", babySitters)

useEffect(() => {
  const locationUrl = "http://localhost:8080/api/location" //use path and set proxy
  //runs when page loads
  axios.get(locationUrl)
    .then((response) => {
      setLocations(response.data.locations)
    })
 }, [])
 console.log("BabySitters locations here: ", locations)

 useEffect(() => {
  const loggedinBabysitter = JSON.parse(localStorage.getItem('babysitter'))
 {loggedinBabysitter ? setBabysitter(loggedinBabysitter) : setBabysitter(null)}
 {loggedinBabysitter ? setToken(loggedinBabysitter.token)  : setToken(null)}

 const loggedInUser = JSON.parse(localStorage.getItem('user'))
 {loggedInUser ? setuser(loggedInUser) : setuser(null)}
 {loggedInUser ? setToken(loggedInUser.token)  : setToken(null)}

}, []);


const changeAvailability = (available, babysitter_id) => {
console.log("Testing: ", available, babysitter_id)

axios.post(`http://localhost:8080/api/babysitteravail/${babysitter_id}`, {available})
      .then((res) => {
       console.log("From axios babysitter: ", res.data.babysitter)
       getBabySitters();
      })
}
const addBooking = (booking) => {
  console.log("Add booking function", booking);
  axios.post(`http://localhost:8080/api/babysitter`, {booking})
      .then((res) => {
       console.log("From axios booking: ", res.data.booking)
      //  getBabySitters();
      })
  
}
 
 return (

<div>
    <Availability changeAvailability={changeAvailability} babysitterAvailabilty={babysitterAvailabilty} setBabysitterAvailability={setBabysitterAvailability} babysitter={babysitter} />
    <BabySitterFinderScreen babySitters={babySitters} booking={booking} user={user} addBooking={addBooking} />
   <Map babySitters={babySitters} locations={locations}/>
    </div>
   )
  }
  
  export default BabySitterFinderParent;