import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1 class="head">
        Counter : <span id="updater">{count}</span>
      </h1>
      <div className="buttons">
        <button className="increment" onClick={incrementCount}>
          Increment
        </button>
        <button className="decrement" onClick={decrementCount}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
