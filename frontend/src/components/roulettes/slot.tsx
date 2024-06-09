import { capitalize } from "../../core/string-utils";
import { SlotInterface } from "../../sdk/roulette";

export const Slot = ({
  slot,
  total,
}: {
  slot: SlotInterface,
  total: number,
}) => {
  const percentage = slot.chance / total * 100;

  return (
    <div>
      <p>{capitalize(slot.fruit)}:{" "}{percentage}%</p>
    </div>
  );
}
