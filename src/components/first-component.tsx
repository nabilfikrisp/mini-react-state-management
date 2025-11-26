import { useStore } from "../packages/stored";
import { countStore } from "../store/count.store";

export default function FirstComponent() {
  const { count, refresh } = useStore(countStore);

  return (
    <div>
      <p>this is from First Component: {count}</p>
      <p>this is refresh: {refresh}</p>
    </div>
  );
}
