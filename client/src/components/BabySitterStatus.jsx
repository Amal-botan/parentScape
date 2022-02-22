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
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(babySitterName, currentStatus, pending, accepted, rejected) {
  return {
    babySitterName,
    currentStatus,
    pending,
    accepted,
    rejected,
   
  };
}
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.babySitterName}
        </TableCell>
        <TableCell align="right">{row.currentStatus}</TableCell>
        <TableCell align="right">{row.pending}</TableCell>
        <TableCell align="right">{row.accepted}</TableCell>
        <TableCell align="right">{row.rejected}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details:
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    baysitter info here
                  </TableRow>
                </TableHead>
                <TableBody>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



const rows = [
  createData('Babysitter 1', 159, 6.0, 24, 4.0, 3.99),
  createData('Babysitter 2', 237, 9.0, 37, 4.3, 4.99),
  createData('Babysitter 3', 262, 16.0, 24, 6.0, 3.79),
  createData('Babysitter 4', 305, 3.7, 67, 4.3, 2.5),
  createData('Babysitter 5', 356, 16.0, 49, 3.9, 1.5),
];

// const Accordion = styled((props) => (

//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   '&:not(:last-child)': {
//     borderBottom: 0,
//   },
//   '&:before': {
//     display: 'none',
//   },
// }));

// const AccordionSummary = styled((props) => (
//   <MuiAccordionSummary
//     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
//     {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === 'dark'
//       ? 'rgba(255, 255, 255, .05)'
//       : 'rgba(0, 0, 0, .03)',
//   flexDirection: 'row-reverse',
//   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
//     transform: 'rotate(90deg)',
//   },
//   '& .MuiAccordionSummary-content': {
//     marginLeft: theme.spacing(1),
//   },
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderTop: '1px solid rgba(0, 0, 0, .125)',
// }));


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
    const status = {status: "rejected"}
    changeStatus(status,id)
  }

  const handleVerify = (id) => {
    console.log("Accepted: ", id)
    const status = {status: "verified"}
    changeStatus(status,id)
  }

  const handlePending = (id) => {
    console.log("Pending: ", id)
    const status = {status: "pending"}
    changeStatus(status,id)
  }

  return (
    <div>
      <Grid container direction="column" alignItems="center" justifyContent="center"
  padding={10}>
  <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Babysitter Name</TableCell>
            <TableCell align="right">Current Status</TableCell>
            <TableCell align="right">Pending</TableCell>
            <TableCell align="right">Accepted</TableCell>
            <TableCell align="right">Rejected</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
      {/* {babySitters.map((babySitter, index) => {
        return (
          <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel1d-header`}>
              <Typography> {babySitter.first_name} {babySitter.last_name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>

                <ToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChangeToggle}
                >
                  <ToggleButton value="rejected" onClick={() => handleRejection(babySitter.id)}>Reject</ToggleButton>
                  <ToggleButton value="verified" onClick={() => handleVerify(babySitter.id)}>Verify</ToggleButton>
                  <ToggleButton value="pending" onClick={() => handlePending(babySitter.id)}>Pending</ToggleButton>
                </ToggleButtonGroup>
              
                <p>Status</p>
                {babySitter.status}
                <p>Description:</p>
                {babySitter.bio}

                <p>Image:</p>
                {babySitter.babysitter_image}
                <p>Years of Experience: </p>
                {babySitter.years_of_experience}
              </Typography>

            </AccordionDetails>




          </Accordion>



        )
      }
      )
      } */}
    </div>
  )
}

export default BabySitterStatus;