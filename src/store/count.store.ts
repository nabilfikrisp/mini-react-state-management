import { createStore } from "../packages/stored";

export const countStore = createStore(
  { count: 0, other: 10 },
  ({ getState, setState }) => ({
    increment: () => {
      const { count } = getState();
      setState({ count: count + 1 });
    },
    decrement: () => {
      const { count } = getState();
      setState({ count: count - 1 });
    },
  })
);
