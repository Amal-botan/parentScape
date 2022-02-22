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
import Grid from '@mui/material/Grid';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1 rem' }} />}
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
  padding: theme.spacing(10),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  marginCenter: theme.spacing(1),
}));

export default function BabySitterFinderScreen(props) {
  const { babySitters, booking, user, addBooking } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [requestButton, setRequestButton] = useState(false);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTimeStart, setBookingTimeStart] = useState("");
  const [bookingTimeEnd, setBookingTimeEnd] = useState("");
  const [bookingDisplay, setBookingDisplay] = useState({});

  // let babySitterId = 0;
  let user_id;

  if (user) {
    console.log("======", user.id)
    user_id = user.id
  }
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleSubmit = () => {
    console.log("----------", requestButton);
    requestButton ? setRequestButton(false) : setRequestButton(true);
  }

  const handleSubmitBooking = (userId, babysitterId) => {
    const bookingSubmitted = { user_id: userId, babysitter_id: babysitterId, booking_date: bookingDate, booking_time_start: bookingTimeStart, booking_time_end: bookingTimeEnd }
    addBooking(bookingSubmitted);
  }

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };



  return (
    <div> 
      <Grid container direction="column" alignItems="center" justifyContent="center"
  padding={1}>
      <Typography variant="h5" gutterBottom component="div">Please choose a city:
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={cities}
        sx={{ width: 200 }}
        renderInput={(params) => <TextField {...params} label="Cities" onChange={(event) => {
          setSearchTerm(event.target.value)
        }} />}
      />
      </Typography>
      </Grid>
      {
        babySitters.filter((babySitter) => {
          if (babySitter.available === "available" && babySitter.status === "verified") {
            if (searchTerm == "") {
              return babySitter;
            } else if (babySitter.city.toLowerCase().includes(searchTerm.toLowerCase())) {
              return babySitter;
            } else if (babySitter.postal_code.toLowerCase().includes(searchTerm.toLowerCase())) {
              return babySitter;
            }
          }
        }).map((babySitter, index) => {
          
          return (

            <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
              <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel1d-header`}>
                <Typography variant="h5" gutterBottom component="div"> {babySitter.first_name} {babySitter.last_name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6" gutterBottom component="div">

                  <p>Description:</p>
                  {babySitter.bio}

                  <p>Image:</p>
                  {babySitter.babysitter_image}
                  <p>Years of Experience: </p>
                  {babySitter.years_of_experience}
                </Typography>
                {user ?
                  <Button variant="contained" size="large" onClick={() => handleSubmit()}>
                    Request

                  </Button> : <div></div>}
                {requestButton ? <div>

                  <Grid item xs={12}>
                    "booking_date":"2022-02-25"
                    <TextField
                      required
                      fullWidth
                      name="Bio"
                      label="Short Description"
                      type="Bio"
                      id="Bio"
                      autoComplete="Bio"
                      value={bookingDate}
                      onChange={(event) => setBookingDate(event.target.value)}

                    />
                  </Grid>
                  <Grid item xs={12}>
                    "booking_time_start":"13:00:00
                    <TextField
                      required
                      fullWidth
                      name="Bio"
                      label="Short Description"
                      type="Bio"
                      id="Bio"
                      autoComplete="Bio"
                      value={bookingTimeStart}
                      onChange={(event) => setBookingTimeStart(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    "booking_time_end": "19:00:00"
                    <TextField
                      required
                      fullWidth
                      name="Bio"
                      label="Short Description"
                      type="Bio"
                      id="Bio"
                      autoComplete="Bio"
                      value={bookingTimeEnd}
                      onChange={(event) => setBookingTimeEnd(event.target.value)}


                    />
                  </Grid>


                  {user ? <Button
                    onClick={() => handleSubmitBooking(user_id, babySitter.id)}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    // onSumbit={sendEmail}
                  >
                    Book
                  </Button> : <div></div>}
                </div> : <div></div>}


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
  { label: 'Ottawa' },
  { label: 'Toronto' },
  { label: 'Hamilton' },
  { label: 'Kanata' },
  { label: 'Orleans' },
  { label: 'Etobicoke' },
];