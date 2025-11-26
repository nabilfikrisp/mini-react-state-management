import { useSyncExternalStore } from "react";

export type Store<TState, TActions extends object = object> = {
  getState: () => TState;
  setState: (partial: Partial<TState>) => void;
  subscribe: (listener: () => void) => () => void;
} & TActions;

export function createStore<TState, TActions extends object = object>(
  initialState: TState,
  actionsFactory?: (helpers: {
    getState: () => TState;
    setState: (partial: Partial<TState>) => void;
  }) => TActions
) {
  let state = initialState;
  const listeners = new Set<(state: TState) => void>();

  const actions = actionsFactory
    ? actionsFactory({
        getState,
        setState,
      })
    : ({} as TActions);

  function getState() {
    return state;
  }

  function setState(partial: Partial<TState>) {
    state = { ...state, ...partial };
    listeners.forEach((listener) => listener(state));
  }

  function subscribe(listener: (state: TState) => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  return {
    state: initialState,
    getState,
    setState,
    subscribe,
    ...actions,
  };
}

export function useStore<TStore, TSelected>(
  store: ReturnType<typeof createStore<TStore>>,
  selector: (state: TStore) => TSelected
): TSelected;

export function useStore<TStore>(
  store: ReturnType<typeof createStore<TStore>>
): TStore;

export function useStore<TStore, TSelected = TStore>(
  store: ReturnType<typeof createStore<TStore>>,
  selector?: (state: TStore) => TSelected
) {
  const getSnapshot = () =>
    selector ? selector(store.getState()) : store.getState();

  return useSyncExternalStore(store.subscribe, getSnapshot, getSnapshot);
}
