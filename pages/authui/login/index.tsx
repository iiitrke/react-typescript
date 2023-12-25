"use client";
import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
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
  const [errors, setErrors] = useState<any>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  useEffect(() => {
    validateForm();
  }, [email, password]);

  const validateForm = () => {
    let errors = {};
    console.log("Validate Called");

    if (!email) {
      errors["email"] = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors["email"] = "Email is invalid.";
    }

    if (!password) {
      errors["password"] = "Password is required.";
    } else if (password.length < 6) {
      errors["password"] = "Password must be at least 6 characters.";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (isFormValid) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Form has errors. Please correct them.");
    }
    // console.log("Auth state is ", authState);
  };

  return (
    <Grid container spacing={2}>
      {/* <Grid item xs={12} sm={6} md={6}>
              <Item>xs=8</Item>
            </Grid> */}
      <p> Login</p>
      <Grid item xs={12} sm={12} md={12}>
        <form>
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
          />

          {errors.email && <p> {`${errors.email}`}</p>}

          <TextField
            name="password"
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p> {`${errors.password}`}</p>}

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

      {/* <br></br>
      {`Email :${errors.email}`}

      {`Password :${errors.password}`} */}
    </Grid>
  );
}
