import { createAsyncThunk } from "@reduxjs/toolkit";
import TableAPI from "./API/tableAPI";
import { Item } from "./interface";



export const removeUserThunk  = createAsyncThunk<string, string>(
  "user/remove_user",
  async (id: string) => {
    const response = await TableAPI.deleteUser(id);
    console.log(response.data,"lll");
    return response.data;
  }
);
export const fetchDataThunk = createAsyncThunk<Item, boolean>("data/fetch_data", async () => {
	try {
		const response = await TableAPI.getAll();
		console.log(response.data, "tttttttttt")
		return response.data
	} catch (error) {
		console.log(error, "Error")
	}
})