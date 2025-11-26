import { useStore } from "../packages/stored";
import { countStore } from "../store/count.store";

export default function FirstComponent() {
  const { count } = useStore(countStore);
  return <div>this is from First Component: {count}</div>;
}
