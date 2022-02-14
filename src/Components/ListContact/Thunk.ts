import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserItem } from "./interface";

export const CouterFriend = createAsyncThunk<number, number>("List/CouterFriend", (param) => {
    return param;
})
export const CouterFollow = createAsyncThunk<number, number>("List/CouterFollow", (param) => {
    return param;
})
export const AddUser = createAsyncThunk<IUserItem, IUserItem>("List/AddTodo", (param) => {
    return param;
}) 
export const DeleteUser = createAsyncThunk<string, string>("List/DeleteUser", (param) => {
    return param;
}) 
export const Search = createAsyncThunk<string, string>("List/SearchUser", (param) => {
    return param;
}) 
export const UpdateUser = createAsyncThunk<IUserItem, IUserItem>("List/UpdateUser", (param) => {
    return param;
}) 