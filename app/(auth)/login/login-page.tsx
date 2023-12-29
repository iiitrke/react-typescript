"use client";

import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useFormik, Form } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";

import { LoadingAsFC } from "../../../src/components/loading/Loading";
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

export default function LoginPage() {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: async (formsData, { setSubmitting, resetForm }) => {
      debugger;
      console.log(formsData);

      const response = await signIn("credentials", {
        email: formsData.email,
        password: formsData.password,
        redirect: false,
      });
      console.log(response);
      setSubmitting(false);
    },
  });

  // const handleSubmit = async (e: any) => {
  //   await signIn("github");
  // };
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return <LoadingAsFC />;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
        <form onSubmit={formik.handleSubmit}>
          <Grid>
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
            {formik.errors.email ? <div> {formik.errors.email} </div> : null}
          </Grid>
          <Grid>
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
            {formik.errors.password ? (
              <div>{formik.errors.password} </div>
            ) : null}
          </Grid>
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
