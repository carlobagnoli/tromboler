import { useSelector } from "react-redux";
import { capitalize } from "../core/string-utils";
import { selectUserCredits, selectUserError, selectUserFruits } from "../store/user/selectors";

export const User = () => {
  const fruits = useSelector(selectUserFruits);
  const credits = useSelector(selectUserCredits);
  const error = useSelector(selectUserError);

  return (
    <div style={{
      border: "1px solid black",
      borderRadius: "10px",
      padding: "0px 20px",
    }}>
      <p>Creditos: {credits}</p>

      <p>Frutas:</p>
      {fruits?.map(({ fruit, amount }, i) => {
        return (
          <p>{amount} {capitalize(fruit) + (amount > 1 ? "s" : "")}</p>
        );
      })}

      <p style={{
        color: "red"
      }}>
        {error}
      </p>
    </div>
  );
}
