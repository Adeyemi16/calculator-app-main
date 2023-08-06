import React from "react";
import { useGlobalContext } from "../context/context";

const Keys = () => {
  const {
    toggle,
    handleClearClick,
    handleDelClick,
    handleDotClick,
    handleEqualClick,
    handleNumberClick,
    handleOperatorClick,
  } = useGlobalContext();

  let key = "";
  let del = "";
  let reset = "";
  let equal = "";
  let keys = "";

  if (toggle === 1) {
    keys = "keys";
    key = "key";
    del = "del";
    reset = "reset";
    equal = "equal";
  } else if (toggle === 2) {
    keys = "keysb";
    key = "keyb";
    del = "delb";
    reset = "resetb";
    equal = "equalb";
  } else if (toggle === 3) {
    keys = "keysc";
    key = "keyc";
    del = "delc";
    reset = "resetc";
    equal = "equalc";
  }
  return (
    <div className={keys}>
      <div className="grid">
        <div className={key} onClick={() => handleNumberClick(7)}>
          7
        </div>
        <div className={key} onClick={() => handleNumberClick(8)}>
          8
        </div>
        <div className={key} onClick={() => handleNumberClick(9)}>
          9
        </div>
        <div className={del} onClick={handleDelClick}>
          Del
        </div>
        <div className={key} onClick={() => handleNumberClick(4)}>
          4
        </div>
        <div className={key} onClick={() => handleNumberClick(5)}>
          5
        </div>
        <div className={key} onClick={() => handleNumberClick(6)}>
          6
        </div>
        <div className={key} onClick={() => handleOperatorClick("+")}>
          +
        </div>
        <div className={key} onClick={() => handleNumberClick(1)}>
          1
        </div>
        <div className={key} onClick={() => handleNumberClick(2)}>
          2
        </div>
        <div className={key} onClick={() => handleNumberClick(3)}>
          3
        </div>
        <div className={key} onClick={() => handleOperatorClick("-")}>
          -
        </div>
        <div className={key} onClick={handleDotClick}>
          .
        </div>
        <div className={key} onClick={() => handleNumberClick(0)}>
          0
        </div>
        <div className={key} onClick={() => handleOperatorClick("×")}>
          ×
        </div>
        <div className={key} onClick={() => handleOperatorClick("÷")}>
          ÷
        </div>
      </div>
      <div className="resetandequal">
        <div className={reset} onClick={handleClearClick}>
          reset
        </div>
        <div className={equal} onClick={handleEqualClick}>
          =
        </div>
      </div>
    </div>
  );
};

export default Keys;
