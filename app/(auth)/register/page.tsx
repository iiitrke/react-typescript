"use client";
import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

import { Input, InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { User } from "@prisma/client";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Page() {
  const [authState, setAuthState] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const submitForm = () => {
    // e.preventDefault();
    console.log("Auth state is ", authState);
  };

  return (
    <Grid container spacing={2}>
      {/* <Grid item xs={12} sm={6} md={6}>
              <Item>xs=8</Item>
            </Grid> */}
      <Grid item xs={12} sm={12} md={12}>
        <form>
          <TextField
            name="username"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) =>
              setAuthState({ ...authState, name: e.target.value })
            }
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) =>
              setAuthState({ ...authState, email: e.target.value })
            }
          />

          <TextField
            name="password"
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            margin="normal"
            onChange={(e) =>
              setAuthState({ ...authState, password: e.target.value })
            }
          />
          <TextField
            name="repassword"
            label="Confirm Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            onChange={(e) =>
              setAuthState({ ...authState, confirm_password: e.target.value })
            }
          />

          <Button
            variant="contained"
            color="primary"
            // type="submit"
            onClick={submitForm}
          >
            Submit
          </Button>
        </form>
      </Grid>
      {`Name : ${authState.name}`}
      <br></br>
      {`Email :${authState.email}`}
      <br></br>
      {`Email :${authState.password}`}
      <br></br>
      {`Email :${authState.confirm_password}`}
    </Grid>
  );
}
