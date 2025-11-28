# Mini React State Management

A learning project to understand how React state management libraries work under the hood.

## What I Built

A minimal state management solution using React's `useSyncExternalStore` API. It's similar to Zustand but stripped down to the basics. changed from wsl.

## How It Works

### Create a Store

```typescript
import { createStore } from "./stored";

export const countStore = createStore(
  { count: 0, other: "hello" },
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
```

### Use in Components

**Read state:**

```typescript
import { useStore } from "./stored";
import { countStore } from "./store/count.store";

function Count() {
  const count = useStore(countStore, (state) => state.count);
  return <p>Count: {count}</p>;
}
```

**Trigger actions:**

```typescript
function Actions() {
  return (
    <div>
      <button onClick={countStore.increment}>+</button>
      <button onClick={countStore.decrement}>-</button>
    </div>
  );
}
```

## Key Concepts I Learned

1. **Subscription Pattern**: Components subscribe to state changes and get notified when state updates
2. **Selectors**: Only re-render when the specific data you're watching changes
3. **External Store**: State lives outside React's component tree but integrates seamlessly
4. **useSyncExternalStore**: React 18's hook for subscribing to external stores

## Important Patterns

**Always use selectors:**

```typescript
// ✅ Only re-renders when count changes
const count = useStore(countStore, (state) => state.count);

// ❌ Re-renders on ANY state change
const { count } = useStore(countStore);
```

**Separate reading from actions:**

```typescript
// Component that reads (re-renders on state change)
function Display() {
  const count = useStore(countStore, (state) => state.count);
  return <p>{count}</p>;
}

// Component that only triggers actions (never re-renders)
function Controls() {
  return <button onClick={countStore.increment}>+</button>;
}
```
