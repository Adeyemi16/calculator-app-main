import "./App.css";
import { useState } from "react";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(1);
  const [num, setNum] = useState([]);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");

  let color = "";
  let background = "";
  let p = "";
  let h5 = "";
  let ball = "";
  let keys = "";
  let key = "";
  let input = "";
  let del = "";
  let reset = "";
  let equal = "";

  if (toggle === 1) {
    color = "ballContainer";
    background = "body";
    p = "p";
    h5 = "h5";
    ball = "ball";
    keys = "keys";
    input = "input";
    key = "key";
    del = "del";
    reset = "reset";
    equal = "equal";
  } else if (toggle === 2) {
    color = "ballContainerb";
    background = "bodyb";
    p = "pb";
    h5 = "h5b";
    ball = "ballb";
    keys = "keysb";
    input = "inputb";
    key = "keyb";
    del = "delb";
    reset = "resetb";
    equal = "equalb";
  } else if (toggle === 3) {
    color = "ballContainerc";
    background = "bodyc";
    p = "pc";
    h5 = "h5c";
    ball = "ballc";
    keys = "keysc";
    input = "inputc";
    key = "keyc";
    del = "delc";
    reset = "resetc";
    equal = "equalc";
  } else {
    setToggle(1);
  }

  const handleNumberClick = (number) => {
    setNum((prevNum) => [...prevNum, number]);
  };

  const handleOperatorClick = (operator) => {
    setOperator(operator);
    setResult(calculateResult());
    setNum([]);
  };

  const calculateResult = () => {
    let inputString = num.join("");
    let inputNumber = parseFloat(inputString);

    if (!operator || isNaN(inputNumber)) {
      return inputNumber;
    }

    let currentResult = result;
    switch (operator) {
      case "+":
        currentResult += inputNumber;
        break;
      case "-":
        currentResult -= inputNumber;
        break;
      case "×":
        currentResult *= inputNumber;
        break;
      case "÷":
        currentResult /= inputNumber;
        break;
      default:
        break;
    }

    return currentResult;
  };

  const handleEqualClick = () => {
    setResult(calculateResult());
    setNum([]);
    setOperator("");
  };

  const handleClearClick = () => {
    setNum([]);
    setResult(0);
    setOperator("");
  };
  const handleDelClick = () => {
    setNum((prevNum) => prevNum.slice(0, -1));
  };

  const handleDotClick = () => {
    if (!num.includes(".")) {
      setNum((prevNum) => [...prevNum, "."]);
    }
  };

  return (
    <div className={background}>
      <div className="toggles">
        <p className={p}>calc</p>{" "}
        <div className="toggle">
          <h5 className={h5}>theme</h5>{" "}
          <div className="div">
            {" "}
            <div className="nums">
              {" "}
              <h5 className={h5} onClick={() => setToggle(1)}>
                1{" "}
              </h5>
              <h5 className={h5} onClick={() => setToggle(2)}>
                2
              </h5>
              <h5 className={h5} onClick={() => setToggle(3)}>
                3
              </h5>
            </div>
            <div className={color} onClick={() => setToggle(toggle + 1)}>
              <div className={ball} onClick={() => setToggle(toggle + 1)}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={input}>{num.length === 0 ? result : num.join("")}</div>

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
    </div>
  );
}

export default App;
