import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserResource } from "../../sdk";

export const fetchUserThunk = createAsyncThunk(
  "user/fetchUser",
  async () => {
    const resource = await UserResource.list();
    return resource.toObject();
  }
);

export const spinRouletteThunk = createAsyncThunk(
  "user/spinRoulette",
  async (id: string, { rejectWithValue }) => {
    try {
      const resource = await UserResource.spin(id);
      return resource.toObject();
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  }
)
