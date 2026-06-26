import { useState } from "react";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Counter</h2>

      <h3>{count}</h3>

      <Button text="Increase" onClick={() => setCount(count + 1)} />

      <Button text="Decrease" onClick={() => setCount(count - 1)} />
    </>
  );
}

export default Counter;
