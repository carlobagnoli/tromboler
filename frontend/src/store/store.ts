import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rouletteReducer } from "./roulette";
import { userReducer } from "./user";

const rootReducer = combineReducers({
  user: userReducer,
  roulettes: rouletteReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const selectState = (state: RootState) => state;
