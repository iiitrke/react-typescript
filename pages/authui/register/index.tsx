"use client";
import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

import { Input, InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerService } from "../../../src/service/auth/register/registerService";

import { User } from "@prisma/client";
import { redirect } from "next/navigation";

import { useRouter } from "next/navigation";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const initialValues = {
  name: "ddd",
  email: "dd@dd.cc",
  password: "ddd",
  repassword: "ddd",
};

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string()
    .email("Invalid email Address format")
    .required("Email is Required"),

  password: Yup.string()
    .min(3, "Password must be 3 character at minimum")
    .required("Password is Required"),

  repassword: Yup.string()
    .min(3, "Password must be 3 character at minimum")
    .required("Password is Required")
    .test("password-match", "Password must match", function (value) {
      return this.parent.password === value;
    }),
});
export default function Page() {
  const { push } = useRouter();
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: RegisterSchema,
    onSubmit: (formsData, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      const result = registerService.save(formsData);
      result
        .then((r) => push("/authui/register/success"))
        .catch((e) => push("/authui/register/error"));
      setSubmitting(false);
    },
  });

  return (
    <Grid container spacing={2}>
      {/* <Grid item xs={12} sm={6} md={6}>
              <Item>xs=8</Item>
            </Grid> */}
      <p> Register</p>
      <Grid item xs={12} sm={12} md={12}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            name="username"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={formik.handleChange("name")}
            onBlur={formik.handleBlur("name")}
            value={formik.values.name}
          />
          {formik.errors.name ? <div>{formik.errors.name}</div> : null}

          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
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
            onChange={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            value={formik.values.password}
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}

          <TextField
            name="repassword"
            label="Confirm Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            onChange={formik.handleChange("repassword")}
            onBlur={formik.handleBlur("repassword")}
            value={formik.values.repassword}
          />
          {formik.errors.repassword ? (
            <div>{formik.errors.repassword}</div>
          ) : null}

          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
          >
            {formik.isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Grid>
      {/* {`Name : ${authState.name}`}
      <br></br>
      {`Email :${authState.email}`}
      <br></br>
      {`Email :${authState.password}`}
      <br></br>
      {`Email :${authState.confirm_password}`} */}
    </Grid>
  );
}
