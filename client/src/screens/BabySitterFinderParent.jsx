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
const [babysitterAvailabilty, setBabysitterAvailability] = useState("");



console.log("TEST")
 useEffect(() => {
  const babySitterUrl = "http://localhost:8080/api/babysitter" //use path and set proxy
  //runs when page loads
  axios.get(babySitterUrl)

    .then((response) => {
      console.log("WORKING")
      setBabySitters(response.data.babysitter)
    })
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

}, []);

const changeAvailability = () => {

}

 
 return (
<div>
    <Availability changeAvailability={changeAvailability} babysitterAvailabilty={babysitterAvailabilty} setBabysitterAvailability={setBabysitterAvailability} babysitter={babysitter} />
    <BabySitterFinderScreen babySitters={babySitters} />
   <Map babySitters={babySitters} locations={locations}/>
    </div>
   )
  }
  
  export default BabySitterFinderParent;