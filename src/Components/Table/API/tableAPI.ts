import { axiosClient } from "./axiosCilent";
import { Item } from "../interface"

const TableAPI = {
  getAll() {
    const url = `/item-table`;
    return axiosClient.get(url);
  },
  deleteUser(id: string) {
    const url = `/item-table/${id}`;
    return axiosClient.delete(url);
  },
};


export default TableAPI