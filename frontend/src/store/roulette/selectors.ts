import { createSelector } from "@reduxjs/toolkit";
import { selectState } from "../store";

export const selectRoulettes = createSelector(
  [selectState],
  (state) => state.roulettes.roulettes
);
