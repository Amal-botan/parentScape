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
import { useState } from 'react'; 

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

export default function BabySitterFinderScreen(props) {
  const { babySitters } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


//Stretch: instead of hard coding cities we can try and write them in.
  // const cities = babySitters.map((babySitter) => {
  //   const citiesBaby = [];
  //   if (!citiesBaby.includes(babySitter.city)) {
  //     console.log(!citiesBaby.includes(babySitter.city))
  //     citiesBaby.push(babySitter.city)
  //   }
  //   return citiesBaby;
  // })

  // console.log("Cities inloop: ", cities)

  return (
    <div> Please choose a city:
       <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={cities}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Cities" onChange={(event) => {
    setSearchTerm(event.target.value)
  }}/>}
/>
{
      babySitters.filter((babySitter) => {
        if(searchTerm == "") {
          return babySitter;
        } else if (babySitter.city.toLowerCase().includes(searchTerm.toLowerCase())) {
          return babySitter;
        } else if (babySitter.postal_code.toLowerCase().includes(searchTerm.toLowerCase())) {
          return babySitter;
        }
      }).map((babySitter, index) => {

return (
    
      <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
        <AccordionSummary aria-controls= {`panel${index}d-content`} id={`panel1d-header`}>
          <Typography> {babySitter.first_name} {babySitter.last_name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <p>Description:</p>
            {babySitter.bio}
            <p>Image:</p>
            {babySitter.babysitter_image} 
            <p>Years of Experience: </p>
            {babySitter.years_of_experience}
          </Typography>
          <Button variant="contained" size="large">
          Request
        </Button>
        </AccordionDetails>
      </Accordion>



)
      })
      
  }


      {/* <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Baby Sitter Name</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Baby sitter bio, photo, years of experience
          </Typography>
          <Button variant="contained" size="large">
          Request
        </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Baby Sitter Name</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Baby sitter bio, photo, years of experience
          </Typography>
        </AccordionDetails>
        <Button variant="contained" size="large">
          Request
        </Button>
      </Accordion>
      */}
    </div>
    
  );
}

const cities = [
  { label: 'Ottawa'},
  { label: 'Toronto'},
  { label: 'Hamilton'},
  { label: 'Kanata'},
  { label: 'Orleans'},
  { label: 'Etobicoke'},
];