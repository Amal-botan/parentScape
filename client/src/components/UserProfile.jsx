import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function UserProfile(props) {
  const { user } = props;
  return (
    <div>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 200,
          height: 200,
        },
      }}
    >
    <Stack direction="row" spacing={2}>
      <Paper elevation={3} />
      <Avatar
        alt="Remy Sharp"
        src={user.user_image}
        sx={{ width: 150, height: 150 }}
      />
      {user.username}

    </Stack>
    </Box>
    </div>
  );
}
