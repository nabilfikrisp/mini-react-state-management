import { useSyncExternalStore } from "react";

export function createStore<T>(initialValue: T) {
  let state = initialValue;
  const listeners = new Set<(state: T) => void>();

  function getState() {
    return state;
  }

  function setState(partial: Partial<T>) {
    state = { ...state, ...partial };
    listeners.forEach((listener) => listener(state));
  }
  function subscribe(listener: (state: T) => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  return {
    getState,
    setState,
    subscribe,
  };
}

export function useStore<TStore>(
  store: ReturnType<typeof createStore<TStore>>
) {
  return useSyncExternalStore(store.subscribe, store.getState, store.getState);
}
