import { Box, Button, Card, Input, InputLabel, TextField } from "@mui/material";
import React from "react";

export class Loginform extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <Box>
          <Box>
            <TextField error id="username" label="User Name" variant="filled" />
          </Box>
          <Box>
            <TextField error id="password" label="Password" variant="filled" />
          </Box>
          <Box>
            <Button variant="contained">Contained</Button>
          </Box>
        </Box>
      </>
    );
  }
}
