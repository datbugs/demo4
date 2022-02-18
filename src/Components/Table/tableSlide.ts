import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchDataThunk } from './tableThunk';
import { Item } from './interface';

export interface TableState {
  dataTable: Item[],
}

const initialState: TableState = {
  dataTable: [],
}

const tableSlide = createSlice({
  name: 'table',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataThunk.fulfilled, (state, action) => {
      state.dataTable = action.payload;
    });

  }

});
// const dataUser = Object.values(dataTable);


// export const listDataTable = dataUser.map((item, index) => {
//   console.log(item, "datatable")
//   return item;
// })

// export const dataList = selectedRows.map.map((data, index) => {

// })

export default tableSlide.reducer
