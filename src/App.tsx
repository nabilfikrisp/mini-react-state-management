import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Mini Store</h1>
      <div className="card">
        <div>count is {count}</div>
        <button onClick={() => setCount(count + 1)}>+</button>

        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 5)}>add 5</button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>
    </>
  );
}

export default App;
