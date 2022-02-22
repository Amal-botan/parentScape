import * as React from 'react';

import Button from '@mui/material/Button';
import SendIcon from "@mui/icons-material/Send";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';



function Availability(props) {
  const { changeAvailability, babysitterAvailabilty, setBabysitterAvailability, babysitter } = props;
  const [availabilityButton, setAvailabilityButton] = useState(true)
  // const [availablity, setAvailablity] = useState("aval")
  console.log({ babysitter });

  const handleSubmit = () => {

    
      availabilityButton ? setAvailabilityButton(false) : setAvailabilityButton(true)
      availabilityButton ? changeAvailability("unavailable",babysitter.id) :  changeAvailability("available", babysitter.id)

  }
return (
  <div>
  <Grid container direction="column" alignItems="center" justifyContent="center"
  padding={10}>
  <Box
        margin
        width={310} height={110} 
        bgcolor="white"
        alignItems="center" justifyContent="center"
        >
      
<Typography variant="h5">
{
  babysitter && <div> Your status is: {babysitter.status}</div>
  
}
    {babysitter?.status === "verified" &&
      (<Button
        variant="contained"
        size="small"
        endIcon={<SendIcon />}
        type="submit"
        onClick={() => handleSubmit()}
      >
        Availability
      </Button>) 
    }

    {babysitter?.status === "verified" ?

      (availabilityButton ?
        <div>
          You're available {babysitter?.first_name}
        </div> : <div>
          You're unavailable {babysitter?.first_name}
        </div>)
      :
      <div></div>
    }

</Typography>
</Box>
</Grid>
  </div >
);
}
export default Availability;
