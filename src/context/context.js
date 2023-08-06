import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [toggle, setToggle] = useState(1);
  const [num, setNum] = useState([]);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");

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
    <AppContext.Provider
      value={{
        handleClearClick,
        handleDelClick,
        handleDotClick,
        handleEqualClick,
        handleOperatorClick,
        calculateResult,
        handleNumberClick,
        toggle,
        setToggle,
        num,
        setNum,
        result,
        setResult,
        operator,
        setOperator,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
