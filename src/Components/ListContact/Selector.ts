import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../stores";

const ListSelector = (state: RootState) => state;

export const FollowSelector = createSelector(
  ListSelector, (state) => {
    return state.couterlist;
  }
);
export const FriendSelector = createSelector(
  ListSelector, (state) => {
    return state.couterlist;
  }
);
const getList = (state: RootState) => state.couterlist;

export const getListState = createSelector([getList], ({ data }) => data);

const getModel = (state: RootState) => state.couterlist;

export const getModelState = createSelector([getModel], ({ model }) => model);
