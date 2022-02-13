import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITodoItem } from "./interface";

export const CouterFriend = createAsyncThunk<number, number>("List/CouterFriend", (param) => {
    return param;
})
export const CouterFollow = createAsyncThunk<number, number>("List/CouterFollow", (param) => {
    return param;
})
export const AddTodo = createAsyncThunk<ITodoItem, ITodoItem>("List/AddTodo", (param) => {
    return param;
}) 
export const DeleteTodo = createAsyncThunk<string, string>("List/DeleteTodo", (param) => {
    return param;
}) 