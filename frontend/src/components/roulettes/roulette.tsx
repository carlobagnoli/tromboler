import { useDispatch } from "react-redux";
import { RouletteInterface } from "../../sdk";
import { AppDispatch } from "../../store";
import { spinRouletteThunk } from "../../store/user/thunks";
import { Slot } from "./slot";

export const Roulette = ({
  roulette,
}: {
  roulette: RouletteInterface
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const totalChance = roulette.slots.reduce((acc, slot) => {
    return slot.chance + acc;
  }, 0);

  return (
    <div style={{
      border: "1px solid black",
      borderRadius: "10px",
      padding: "0px 20px",
    }}>
      <p>Precio: {roulette.price}</p>

      {roulette.slots.map((slot, i) => {
        return (
          <Slot key={i} total={totalChance} slot={slot} />
        );
      })}

      <button
        style={{
          cursor: "pointer",
        }}
        onClick={() => {
          dispatch(spinRouletteThunk(roulette.id));
        }}
      >
        SPIN
      </button>
    </div>
  )
}
