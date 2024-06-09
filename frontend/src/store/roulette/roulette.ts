import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../../core";
import { RouletteInterface } from "../../sdk";
import { fetchRoulettesThunk } from "./thunks";

export type RouletteState = {
  status: Status;
  roulettes?: RouletteInterface[];
}

const initialState: RouletteState = {
  status: "idle",
}

const rouletteSlice = createSlice({
  name: "roulette",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoulettesThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.roulettes = action.payload;
      })
      .addCase(fetchRoulettesThunk.pending, (state, _) => {
        state.status = "pending";
      });
  }
});

export const rouletteReducer = rouletteSlice.reducer;
