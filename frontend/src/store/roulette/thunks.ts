import { createAsyncThunk } from "@reduxjs/toolkit";
import { RouletteResource } from "../../sdk";

export const fetchRoulettesThunk = createAsyncThunk(
  "roulette/fetchRoulettes",
  async () => {
    const resource = await RouletteResource.list();
    return resource.map(res => res.toObject());
  }
)
