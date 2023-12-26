"use client";
import { Button, Grid, TextField } from "@mui/material";
import React, { startTransition, useEffect, useReducer } from "react";
import { useState } from "react";

import { Input, InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { error } from "console";
import { Field, ErrorMessage, useFormik } from "formik";

const initialValues = {
  email: "",
  password: "",
};

const validater = (values: any) => {
  const errors: any = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 20) {
    errors.password = "Must be 20 characters or less";
  }

  return errors;
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Page() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validate: validater,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />

          {formik.errors.email ? <div>{formik.errors.email}</div> : null}

          <TextField
            name="password"
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            margin="normal"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}

          <Button variant="contained" color="primary" type="submit">
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
