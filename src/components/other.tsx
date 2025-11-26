import { useStore } from "../packages/stored";
import { countStore } from "../store/count.store";

export default function Other() {
  const other = useStore(countStore, (state) => state.other);

  return (
    <div>
      <p>Other: {other}</p>
    </div>
  );
}
