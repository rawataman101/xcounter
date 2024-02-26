import "./index.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 3)}>Increment</button>
      <button onClick={() => setCount(count - 3)}>Decrement</button>
    </div>
  );
}
