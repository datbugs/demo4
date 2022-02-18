// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { Item } from "./interface";

// export const fetchDataTableThunk = createAsyncThunk<Item, boolean>("list/fetch_user", async (_) => {
// 	try {
// 		const response = await UserAPI.getAll();
// 		return response.data;
// 	} catch (err) {
// 		console.warn(err);
// 	}
// });

import { createAsyncThunk } from "@reduxjs/toolkit";
import TableAPI from "./API/tableAPI";
import { Item } from "./interface";

export const fetchDataThunk = createAsyncThunk("data/fetch_data", async () => {
  const response = await TableAPI.getAll();
	console.log(response.data, "aaa")
	return response.data;
});


export const deleteTableUser = createAsyncThunk<Item, Item>("Table/DeleteTable", (param) => {
	return param;
})