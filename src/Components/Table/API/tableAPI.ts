import { axiosClient } from "./axiosCilent";

const TableAPI = {
  getAll() {
    const url = `/item-table`;
    console.log(url, "hhh")
    return axiosClient.get(url);
  }
};


export default TableAPI