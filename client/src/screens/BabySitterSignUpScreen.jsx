import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import axios from 'axios';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        ParentScape
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const Input = styled('input')({
  display: 'none',
});
const theme = createTheme();

export default function BabySitterSignUpScreen() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    axios.post("http://localhost:8080/api/babysitterauth/register", {
      email: data.get("email"),
      password: data.get("password"),
    })
    .then((res) => {
      console.log("data: ", res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user))
      window.location.href= "/"; 
    
    })


  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ width: 80, height: 80, m: 2, bgcolor: 'secondary.main' }}>
            <BabyChangingStationIcon sx={{ width: 50, height: 50, m: 2, bgcolor: 'secondary.main' }}/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Baby Sitter Sign up Page
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="age"
                  name="age"
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Phonenumber"
                  label="Phone Number"
                  name="Phoneumber"
                  autoComplete="Phonenumber"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="City"
                  name="City"
                  required
                  fullWidth
                  id="City"
                  label="City"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Address"
                  label="Address"
                  name="Address"
                  autoComplete="Address"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="Province"
                  name="Province"
                  required
                  fullWidth
                  id="Province"
                  label="Province"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Postal Code"
                  label="Postal Code"
                  name="Postal Code"
                  autoComplete="Postal Code"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="outlined-number"
                  label="Years of Experience"
                  type="number"
                  id="Years of Experience"
                  autoComplete="Years of Experience"
                />
              </Grid>
              <Grid item xs={12}>
              Please explain your experience working with children
                <TextField
                  required
                  fullWidth
                  name="Bio"
                  label="Short Description"
                  type="Bio"
                  id="Bio"
                  autoComplete="Bio"
                />
              </Grid>
            <Grid item xs={12}>  <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        Please Upload a recent photo 
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      </Stack></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              

                <Link variant="body2" to="/babysitterfinderlogin"> Already have an account? Sign in</Link>

              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    
  );
  
}