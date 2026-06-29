
import React, { useState, useEffect } from "react";

function TrackCounter() {
  // State for count
  const [count, setCount] = useState(0);

  // useEffect runs whenever count changes
  useEffect(() => {
    document.title = `Button Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default TrackCounter;