import { countStore } from "../store/count.store";

export default function SecondComponent() {
  return (
    <div>
      <p>this is from Second Component</p>
      <button onClick={countStore.increment}>+</button>
      <button onClick={countStore.decrement}>-</button>
    </div>
  );
}
