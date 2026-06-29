import React, { useState } from "react";

function Toggle() {
  // State to show/hide paragraph
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Toggle
      </button>

      {show && (
        <p>
          This paragraph is now visible!
        </p>
      )}
    </div>
  );
}

export default Toggle;