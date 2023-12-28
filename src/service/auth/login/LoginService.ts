import axios from "axios";
import * as Yup from "yup";

const initialValues = {
  name: "ddd",
  email: "dd@dd.cc",
  password: "ddd",
  repassword: "ddd",
};

async function save() {
  const result = await axios.get("/orders");
  return result.data || [];
}

async function getJWT(data: { email: string; password: string }) {
  console.log("In login service ", data);
  const result = await axios.get("/orders");

  return result;
}
export const loginService = {
  save,
  getJWT,
};
