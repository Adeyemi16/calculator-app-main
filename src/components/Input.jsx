import React from "react";
import { useGlobalContext } from "../context/context";

const Input = () => {
  const { num, result, toggle } = useGlobalContext();
  let input = "";
  if (toggle === 1) {
    input = "input";
  } else if (toggle === 2) {
    input = "inputb";
  } else if (toggle === 3) {
    input = "inputc";
  }
  return (
    <input
      className={input}
      type="text"
      value={num.length === 0 ? result : num.join("")}
      readOnly
    />
  );
};

export default Input;
