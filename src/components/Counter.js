import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2>Press to button to increase number by 1</h2>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
