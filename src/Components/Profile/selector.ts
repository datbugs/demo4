import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../stores";

const ProfileSelector = (state:RootState) => state;

export const FollowSelector = createSelector(
    ProfileSelector, (state) => {
        return ;
    }
);
export const FriendSelector = createSelector(
    ProfileSelector, (state) => {
        return ;
    }
);

