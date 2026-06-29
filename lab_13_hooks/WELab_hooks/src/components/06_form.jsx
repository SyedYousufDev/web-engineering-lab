
import React, { useEffect, useRef } from "react";

function AutoFocusForm() {
  // 1. Create ref
  const inputRef = useRef(null);

  // 2. Focus input on component mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Login Form</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
      />
    </div>
  );
}

export default AutoFocusForm;