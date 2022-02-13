import { createAsyncThunk } from "@reduxjs/toolkit";

export const CouterFollow = createAsyncThunk<number, number>("Profile/CouterFollow", (param) => {
return param;
})
