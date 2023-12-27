import axios from "axios";
import { API_AUTH_REGISTER } from "../../../URLConstants";

const save = async (data: any) => {
  const result = axios.post(API_AUTH_REGISTER, data);
  return result;
};

export const registerService = {
  save,
};
