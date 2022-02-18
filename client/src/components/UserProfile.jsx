import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function PostUser(props) {
  const { user } = props;
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src={user.user_image}
        sx={{ width: 200, height: 200 }}
      />
      {user.username}

    </Stack>
  );
}
