import * as React from "react";


import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function UserProfile(props) {
  const { user, babysitter } = props;

  return (
    <div className="usercontainer">

      <Avatar
        alt="image"
        src={user ? user.user_image : babysitter.babysitter_image}
        sx={{ width: 200, height: 200 }}       ></Avatar>
       
       <Typography  gutterBottom variant="h6" component="div">
          {user?.username}
          {babysitter?.username}
          </Typography>

          <Typography className="text-align: center" variant="body4" >

           {/* <Typography  variant="body4" color="text.secondary"> */}

          {user?.bio}
          {babysitter?.bio}
          </Typography>

    </div>
  );
}
