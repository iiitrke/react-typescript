import axios from "axios";
import { API_AUTH_REGISTER } from "../../../URLConstants";

const save = async (data: any) => {
  console.log("Going to Save Data");
  try {
    const result = axios.post(API_AUTH_REGISTER, data);
    return result;
  } catch (error) {
    console.log("Error", error);
  }
};

export const registerService = {
  save,
};
