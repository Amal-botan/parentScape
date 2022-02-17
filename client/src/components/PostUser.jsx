import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function PostUser() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="https://cdn-icons-png.flaticon.com/512/3127/3127210.png"
        sx={{ width: 500, height: 500 }}
      />
    </Stack>
  );
}