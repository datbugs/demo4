import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../stores";

const getData = (state: RootState) => state.table;

export const getListData = createSelector([getData], ({ dataTable }) => dataTable);
