import { Box, Card, Input, InputLabel, TextField } from "@mui/material";
import React from "react";

export class Loginform extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <Box>
          <div>
            <TextField
              error
              id="outlined-error"
              label="User Name"
              variant="filled"
              //   defaultValue="Hello World"
            />
          </div>
          <div>
            <TextField
              error
              id="outlined-error"
              label="Password"
              variant="filled"

              //   defaultValue="Hello World"
            />
          </div>
          <div></div>
        </Box>
      </>
    );
  }
}
