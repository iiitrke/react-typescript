import axios from "axios";

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
