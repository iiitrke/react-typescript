import * as Yup from "yup";
export const RegisterSchema = Yup.object().shape({
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
