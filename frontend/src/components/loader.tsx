import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { fetchRoulettesThunk } from "../store/roulette/thunks";
import { fetchUserThunk } from "../store/user/thunks";

export const InitializeData = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUserThunk());
    dispatch(fetchRoulettesThunk());
  }, [dispatch]);

  return null;
}
