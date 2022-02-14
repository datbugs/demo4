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
const getList = (state: RootState) => state.couterlist.users;
export const getListState = createSelector([getList], (users) => {
  const listUser = users.map((item) => ({
    id: item.id,
    name: item.name
  }));
  console.log(listUser)
  return listUser;

});




