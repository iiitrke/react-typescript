import { Button, Grid, TextField } from "@mui/material";
import React, { startTransition, useEffect, useReducer } from "react";
import { useState } from "react";
import { loginService } from "../../../src/service/auth/login/LoginService";

import { Input, InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { error } from "console";
import { Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { AxiosError, AxiosResponse } from "axios";
import { signIn } from "next-auth/react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const initialValues = {
  email: "",
  password: "",
};

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email Address format")
    .required("Email is Required"),

  password: Yup.string()
    .min(3, "Password must be 3 character at minimu")
    .required("Password is Required"),
});

// const validater = (values: any) => {
//   const errors: any = {};

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   if (!values.password) {
//     errors.password = "Required";
//   } else if (values.password.length > 20) {
//     errors.password = "Must be 20 characters or less";
//   }

//   return errors;
// };

export default function Page(props) {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: async (formsData, { setSubmitting, resetForm }) => {
      alert("hanle");
      // const response = await signIn("credentials", {
      //   email: formsData.email,
      //   password: formsData.password,
      //   redirect: false,
      // });
      setSubmitting(false);
    },
  });

  return (
    <Grid container spacing={2}>
      {/* <Grid item xs={12} sm={6} md={6}>
              <Item>xs=8</Item>
            </Grid> */}
      <p> Login</p>

      <Grid item xs={12} sm={12} md={12}>
        <form onSubmit={formik.handleSubmit}>
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
    </Grid>
  );
}
