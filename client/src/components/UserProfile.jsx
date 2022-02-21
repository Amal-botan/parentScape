import * as React from "react";


import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function UserProfile(props) {
  const { user, babysitter } = props;

  return (
    <div>

    <Card sx={{ margin: 15, display: 'flex' }}>
    <CardActionArea>
    <CardMedia
        component="img"
        sx={{ width: 300 }}
        alt="Remy Sharp"
        image={user ? user.user_image : babysitter.babysitter_image}
        
      />
      <CardContent>
          <Typography gutterBottom variant="h3" component="div">
          {user?.username}
          {babysitter?.username}
          </Typography>
          <Typography variant="body4" color="text.secondary">
          {user?.bio}
          {babysitter?.bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
   
    </div>
  );
}
