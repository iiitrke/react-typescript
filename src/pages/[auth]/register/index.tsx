import { Button, Grid, Input, InputLabel, TextField } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Register() {
  return (
    <Grid container spacing={2}>
      {/* <Grid item xs={12} sm={6} md={6}>
        <Item>xs=8</Item>
      </Grid> */}
      <Grid item xs={12} sm={12} md={12}>
        <form>
          <form>
            <TextField
              name="username"
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              name="password"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </form>
      </Grid>
    </Grid>
  );
}
