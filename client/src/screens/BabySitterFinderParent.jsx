import * as React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import Grid from '@mui/material/Grid';

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

 useEffect(() => {
  getBabySitters();
 }, [])


useEffect(() => {
  const locationUrl = "http://localhost:8080/api/location" //use path and set proxy
  //runs when page loads
  axios.get(locationUrl)
    .then((response) => {
      setLocations(response.data.locations)
    })
 }, [])

 useEffect(() => {
  const loggedinBabysitter = JSON.parse(localStorage.getItem('babysitter'))
 {loggedinBabysitter ? setBabysitter(loggedinBabysitter) : setBabysitter(null)}
 {loggedinBabysitter ? setToken(loggedinBabysitter.token)  : setToken(null)}

 const loggedInUser = JSON.parse(localStorage.getItem('user'))
 {loggedInUser ? setuser(loggedInUser) : setuser(null)}
 {loggedInUser ? setToken(loggedInUser.token)  : setToken(null)}

}, []);
const config = { headers: { Authorization: `Bearer ${token}`, }, }      


const changeAvailability = (available, babysitter_id) => {

axios.post(`http://localhost:8080/api/babysitteravail/${babysitter_id}`, {available})
      .then((res) => {
       console.log("From axios babysitter: ", res.data.babysitter)
       getBabySitters();
      })
}

const addBooking = (booking) => {
  console.log("Add booking function", booking);
  axios.post(`http://localhost:8080/api/babysitter`, booking, config)
      .then((res) => {
       console.log("From axios booking: ", res.data.booking)
      //  getBabySitters();
      })
  
}
 
 return (

<div>
    {babysitter ? <Availability changeAvailability={changeAvailability} babysitterAvailabilty={babysitterAvailabilty} setBabysitterAvailability={setBabysitterAvailability} babysitter={babysitter} /> : <div></div>}
    <Grid
  container
  spacing={5}
  direction="row"
  justifyContent="space-evenly"
  padding={15}
  //alignItems="center"
>
  <Grid item xs={6}>
    <BabySitterFinderScreen babySitters={babySitters} booking={booking} user={user} addBooking={addBooking} />
    </Grid>
    <Grid item xs={6}>
   <Map babySitters={babySitters} locations={locations}/>
   </Grid>
   </Grid>
    </div>
   )
  }
  
  export default BabySitterFinderParent;