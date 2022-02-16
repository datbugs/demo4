import { IUserItem } from "./../interface";
import { axiosClient } from "./axiosCilent";

const UserAPI = {
  getAll() {
    const url = `/userlist-ts`;
    return axiosClient.get(url);
  },
};
  export default UserAPI;
