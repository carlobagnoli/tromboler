import { useSelector } from "react-redux"
import { selectRoulettes } from "../../store/roulette/selectors";
import { Roulette } from "./roulette";

export const Roulettes = () => {
  const roulettes = useSelector(selectRoulettes);

  return (
    <div style={{
      display: "flex",
      gap: "20px",
    }}>
      {roulettes?.map((roulette, i) => {
        return (
          <Roulette key={i} roulette={roulette} />
        );
      })}
    </div>
  )
}
