import * as React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import BabySitterFinderScreen from "./BabySitterFinderScreen"

const BabySitterFinderParent = () => {
const [babySitters, setBabySitters] = useState([])

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

 return (

    <BabySitterFinderScreen babySitters={babySitters} />

   )
  }
  
  export default BabySitterFinderParent;