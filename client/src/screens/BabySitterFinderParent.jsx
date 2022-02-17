import * as React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import BabySitterFinderScreen from "./BabySitterFinderScreen"

import Map from '../components/Map';

const BabySitterFinderParent = () => {
const [babySitters, setBabySitters] = useState([])
const [locations, setLocations] = useState ([])

console.log("TEST")
 useEffect(() => {
  const babySitterUrl = "http://localhost:8080/api/babysitter" //use path and set proxy
  //runs when page loads
  axios.get(babySitterUrl)
    .then((response) => {
      setBabySitters(response.data.babysitters)
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

 
 return (
<div>
    <BabySitterFinderScreen babySitters={babySitters} />
   <Map babySitters={babySitters} locations={locations}/>
    </div>
   )
  }
  
  export default BabySitterFinderParent;