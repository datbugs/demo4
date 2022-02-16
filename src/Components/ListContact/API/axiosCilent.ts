import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://reqres.in/api/users?page=2",
  // headers: {
  //     'Content-Type': "multipart/form-data"
  // },
});
