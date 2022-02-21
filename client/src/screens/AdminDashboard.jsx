import * as React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import BabySitterStatus from "../components/BabySitterStatus"


const AdminDashboard = () => {
  const [babySitters, setBabySitters] = useState([])
  const [locations, setLocations] = useState([])
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

  const changeStatus = (status, babysitter_id) => {

    axios.post(`http://localhost:8080/api/babysitterstatus/${babysitter_id}`, status)
      .then((res) => {
        console.log("From axios babysitter: ", res.data.babysitter)
        getBabySitters();
      })

  }


  console.log("babySitters From useeffect: ", babySitters)


  return (

    <div>
      <BabySitterStatus babySitters={babySitters} changeStatus={changeStatus} />
    </div>
  )
}

export default AdminDashboard;