import React from "react";
import "./Button.css";

function Button({ children, Full, onclick }) {
  return (
    <button
      onClick={(e) => onclick && onclick(e)}
      className={Full ? "btn btn-full" : "btn"}
    >
      {children}
    </button>
  );
}

export default Button;
