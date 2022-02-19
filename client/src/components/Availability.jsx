import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import SendIcon from "@mui/icons-material/Send";

import { useState } from 'react';



function Availability(props) {
  const { changeAvailability, babysitterAvailabilty, setBabysitterAvailability, babysitter } = props;
  const [availabilityButton, setAvailabilityButton] = useState(true)
  const [availablity, setAvailablity] = useState("aval")
  console.log({ babysitter });

  const handleSubmit = () => {
    {
      availabilityButton ?
        setAvailabilityButton(false)
        // changeAvailability()
        : setAvailabilityButton(true)
    }

  }
  return (
    <div>


      {babysitter ?
        (<Button
          variant="contained"
          size="small"
          endIcon={<SendIcon />}
          type="submit"
          onClick={() => handleSubmit()}
        >
          Availability
        </Button>) :
        <div></div>
      }

      {babysitter ?

        (availabilityButton ?
          <div>
            You're available {babysitter?.first_name}
          </div> : <div>
            You're unavailable {babysitter?.first_name}
          </div>)
        :
        <div></div>
      }



    </div >

  );
}
export default Availability;
