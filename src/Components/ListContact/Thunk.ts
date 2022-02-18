import { createAsyncThunk } from "@reduxjs/toolkit";
import UserAPI from "./API/userAPI";
import { IData, IUserItem,IDataModelType } from "./interface";

export const CouterFriend = createAsyncThunk<number, number>("List/CouterFriend", (param) => {
	return param;
})
export const CouterFollow = createAsyncThunk<number, number>("List/CouterFollow", (param) => {
	return param;
})
export const AddUser = createAsyncThunk<IData, IData>("List/AddUser", (param) => {
	return param;
})
export const DeleteUser = createAsyncThunk<IData, IData>("List/DeleteUser", (param) => {
	return param;
})
export const Search = createAsyncThunk<string, string>("List/SearchUser", (param) => {
	return param;
})
export const UpdateUser = createAsyncThunk<IUserItem, IUserItem>("List/UpdateUser", (param) => {
	return param;
})

export const fetchUserThunk = createAsyncThunk<IData, boolean>("list/fetch_user", async (_) => {
	try {
		const response = await UserAPI.getAll();
		return response.data;
	} catch (err) {
		console.warn(err);
	}
});
