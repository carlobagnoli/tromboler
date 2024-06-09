import { createSelector } from "@reduxjs/toolkit";
import { selectState } from "../store";

export const selectUser = createSelector(
  [selectState],
  (state) => state.user.user,
);

export const selectUserFruits = createSelector(
  [selectUser],
  (user) => user?.fruits,
);

export const selectUserCredits = createSelector(
  [selectUser],
  (user) => user?.credits,
);

export const selectUserError = createSelector(
  [selectState],
  (state) => state.user.error,
);
