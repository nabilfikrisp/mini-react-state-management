import { useStore } from "../packages/stored";
import { countStore } from "../store/count.store";

export default function Count() {
  const count = useStore(countStore, (state) => state.count);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
