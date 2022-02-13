import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../stores";

const ListSelector = (state:RootState) => state;

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

const getTodos = (state:RootState) => state.couterlist.todos;
// reselect function
export const getTodosState = createSelector([getTodos], (todos) => {
  const list = todos.map((item) => ({
    id: item.id,
    title: item.title + " le quoc dat"
  }));
  console.log(list);
  return list;
});



