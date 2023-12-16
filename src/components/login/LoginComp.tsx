import { Box, Button, Card, Input, InputLabel, TextField } from "@mui/material";
import React, { FormEvent, MouseEventHandler } from "react";

export class Loginform extends React.Component {
  onButtonClicked(event: any) {
    console.log("button Clicked");
  }

  handleOnSubmit(event: FormEvent) {
    event.preventDefault();

    console.log("on submit");
  }

  render(): React.ReactNode {
    return (
      <>
        <form onSubmit={this.handleOnSubmit}>
          <Box flexDirection={"row"}>
            <Box maxWidth={300}>
              <TextField
                error
                id="username"
                label="User Name"
                variant="filled"
              />
            </Box>
            <Box>
              <TextField
                error
                id="password"
                label="Password"
                variant="filled"
              />
            </Box>
            <Box>
              <Button variant="contained" type="submit">
                Contained
              </Button>
            </Box>
          </Box>
        </form>
      </>
    );
  }
}
