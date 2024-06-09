import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../../core";
import { UserInterface } from "../../sdk";
import { fetchUserThunk, spinRouletteThunk } from "./thunks";

export type UserState = {
  status: Status;
  error?: string;
  user?: UserInterface;
};

const initialState: UserState = {
  status: "idle",
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload;
      })
      .addCase(fetchUserThunk.pending, (state, _) => {
        state.status = "pending";
      });

    builder
      .addCase(spinRouletteThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload;
        state.error = undefined;
      })
      .addCase(spinRouletteThunk.pending, (state, _) => {
        state.status = "pending";
      })
      .addCase(spinRouletteThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload as any;
      });
  }
});

export const userReducer = userSlice.reducer;
