import { useStore } from "../packages/stored";
import { countStore } from "../store/count.store";

export default function SecondComponent() {
  const { count } = useStore(countStore);

  return (
    <div>
      <p>this is from Second Component</p>
      <button
        onClick={() =>
          countStore.setState({
            count: count + 1,
          })
        }
      >
        +
      </button>
      <button
        onClick={() => {
          countStore.setState({
            count: count - 1,
          });
        }}
      >
        -
      </button>
    </div>
  );
}
