import "./App.css";
import "./App.css";
import Toggles from "./Toggles";
import Input from "./Input";
import Keys from "./Keys";
import { useGlobalContext } from "./context";

function App() {
  const { toggle } = useGlobalContext();

  let background = "";

  if (toggle === 1) {
    background = "body";
  } else if (toggle === 2) {
    background = "bodyb";
  } else if (toggle === 3) {
    background = "bodyc";
  }

  return (
    <div className={background}>
      {/* Just seperated them 
      into different components 
      after i learned how to use context */}
      <Toggles />
      <Input />
      <Keys />
    </div>
  );
}

export default App;
