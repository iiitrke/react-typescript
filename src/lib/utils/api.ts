import axios from "axios";
import config from "../../config";

const instance = axios.create({
  baseURL: config.API_BANNER,
  timeout: 40000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json; charset=utf-8",
  },
});

export const fetcher = (url: string) => {
  return instance.get(url).then((res) => {
    if (!res.data) {
      throw Error(res.data.message);
    }

    return res.data;
  });
};

export default instance;
