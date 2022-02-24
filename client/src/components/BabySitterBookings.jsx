import * as React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import "../screens/admindashboard.css";


const Accordion = styled((props) => (

  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `5px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const BabySitterBookings = (props) => {
  const { bookings, babysitter, user, changeBooking } = props;
  const [bookingStatus, setBookingStatus] = useState("");

  const [expanded, setExpanded] = React.useState('panel1');
  const [searchTerm, setSearchTerm] = useState("");
  const [alignment, setAlignment] = React.useState('web');

  const handleChangeToggle = (event, newAlignment) => {
    setAlignment(newAlignment);
    console.log()
  };


  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // const status = [
  //   { label: 'Verfiy' },
  //   { label: 'Reject' },
  // ]

  const handleRejection = (id) => {
    console.log("Decline: ", id)
    const booking_status = {booking_status: "Declined"}
    setBookingStatus("declined")
    changeBooking(booking_status,id)
  }

  const handleVerify = (id) => {
    console.log("Accepted: ", id)
    const booking_status = {booking_status: "Accepted"}
    setBookingStatus("accepted")
    changeBooking(booking_status,id)
  }

  const handlePending = (id) => {
    console.log("Pending: ", id)
    const booking_status = {booking_status: "Pending"}
    setBookingStatus("pending")
    changeBooking(booking_status,id)
  }

  return (
    <div>
      {bookings.filter((booking) => {
        if(booking.babysitter_id === babysitter?.id || booking.user_username === user?.username){
          return booking
        }
      }
      ).map((booking, index) => {
        return (
          <Accordion style={{"margin-right": "20px"}} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel1d-header`}>
            <Typography variant="h5" gutterBottom component="div"> {user? <div> {booking.babysitter_first_name} {booking.babysitter_last_name} </div> :  <div> {booking.user_first_name} {booking.user_last_name} </div>}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container
                direction="column"
        width={310} height={700} 
        bgcolor="transparent"
        alignItems="center" justifyContent="space-evenly" textAlign="center">
              <Typography>

                <ToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChangeToggle}
                >
                 {babysitter? <div> <ToggleButton 
                 value="decline" onClick={() => handleRejection(booking.id)}>Decline</ToggleButton>
                  <ToggleButton value="accept" onClick={() => handleVerify(booking.id)}>Accept</ToggleButton>
                  <ToggleButton value="pending" onClick={() => handlePending(booking.id)}>Pending</ToggleButton> </div> : <div></div>}
                </ToggleButtonGroup>
             
                <h4>Booking Status:  {booking.booking_status}</h4>
                  <Avatar
                      alt="image"
                      src= {user? booking.babysitter_image : booking.user_image}
                      sx={{ width: 200, height: 200 }}       ></Avatar>

                
                
                
                
                <h3>Parent Bio:</h3>
                {user? <div className="paragraphs"> {booking.bio} </div> : <div className="paragraphs"> {booking.user_bio} </div>}
               
               <h3>Booking Details:</h3>

               <div> 
                 <p className="paragraphs">Date: {booking.booking_date}</p>
                 <p className="paragraphs">Start Time: {booking.booking_time_start}</p>
                 <p className="paragraphs">End Time: {booking.booking_time_end}</p>
               </div>

                {bookingStatus === "accepted" ? <p> Babysitter Phone Number: {booking.phone_number}</p> : <div></div>}

              </Typography>
              </Grid>
            </AccordionDetails>




          </Accordion>



        )
      }
      )
      }
    </div>
  )
}

export default BabySitterBookings;