import { createStore } from "../packages/stored";

export const countStore = createStore({ count: 0, refresh: 10 });
