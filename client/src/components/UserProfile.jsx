import * as React from "react";


import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function UserProfile(props) {
  const { user } = props;
  return (
    <div>

    <Card sx={{ margin: 15, display: 'flex' }}>
    <CardActionArea>
    <CardMedia
        component="img"
        sx={{ width: 300 }}
        alt="Remy Sharp"
        image={user.user_image}
        
      />
      <CardContent>
          <Typography gutterBottom variant="h3" component="div">
          {user.username}
          </Typography>
          <Typography variant="body4" color="text.secondary">
            {user.bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
   
    </div>
  );
}
