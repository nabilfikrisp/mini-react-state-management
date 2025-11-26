import { countStore } from "../store/count.store";

export default function Actions() {
  return (
    <div>
      <button onClick={countStore.increment}>+</button>
      <button onClick={countStore.decrement}>-</button>
    </div>
  );
}
