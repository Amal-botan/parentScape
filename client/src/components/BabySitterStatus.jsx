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
import Fragment from 'react';
import "../screens/admindashboard.css";

const Accordion = styled((props) => (

  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
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


const BabySitterStatus = (props) => {
  const { babySitters, changeStatus } = props;
  console.log("BabySitter from Status: ", babySitters)
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

  const status = [
    { label: 'Verfiy' },
    { label: 'Reject' },
  ]

  const handleRejection = (id) => {
    console.log("Rejected: ", id)
    const status = { status: "Rejected" }
    changeStatus(status, id)
  }

  const handleVerify = (id) => {
    console.log("Accepted: ", id)
    const status = { status: "Verified" }
    changeStatus(status, id)
  }

  const handlePending = (id) => {
    console.log("Pending: ", id)
    const status = { status: "Pending" }
    changeStatus(status, id)
  }

  return (
    <div>
      {babySitters.map((babySitter, index) => {
        return (
          <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel1d-header`}>
              <Typography> {babySitter.first_name} {babySitter.last_name}: {babySitter.status}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>

                <ToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChangeToggle}
                >
                  <ToggleButton color="secondary" value="rejected" onClick={() => handleRejection(babySitter.id)}>Reject</ToggleButton>
                  <ToggleButton value="verified" onClick={() => handleVerify(babySitter.id)}>Verify</ToggleButton>
                  <ToggleButton value="pending" onClick={() => handlePending(babySitter.id)}>Pending</ToggleButton>
                </ToggleButtonGroup>
                <div className="avatarstatus">
                      <Avatar
                      alt="image"
                      src={babySitter.babysitter_image}
                      sx={{ width: 200, height: 200 }}       ></Avatar>

                      <h3>Status: {babySitter.status}</h3>
                      
       
                </div>
                <h3>Description:</h3>
                <p className="paragraphs">{babySitter.bio}</p>

                <h3 className="paragraphs">Years of Experience: </h3>
                {babySitter.years_of_experience}
              </Typography>

            </AccordionDetails>




          </Accordion>



        )
      }
      )
      }
    </div>
  )
}

export default BabySitterStatus;