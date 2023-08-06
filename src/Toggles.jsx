import React from "react";
import { useGlobalContext } from "./context";

const Toggles = () => {
  const { toggle, setToggle } = useGlobalContext();

  let p = "";
  let h5 = "";
  let ball = "";
  let color = "";

  if (toggle === 1) {
    color = "ballContainer";
    p = "p";
    h5 = "h5";
    ball = "ball";
  } else if (toggle === 2) {
    color = "ballContainerb";
    p = "pb";
    h5 = "h5b";
    ball = "ballb";
  } else if (toggle === 3) {
    color = "ballContainerc";
    p = "pc";
    h5 = "h5c";
    ball = "ballc";
  } else {
    setToggle(1);
  }

  return (
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
  );
};

export default Toggles;
