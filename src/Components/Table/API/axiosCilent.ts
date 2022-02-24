import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://620f6befec8b2ee2833f2881.mockapi.io/api/datbugs/",
});
