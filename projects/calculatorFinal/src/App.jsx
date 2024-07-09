import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import style from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import Container from "./components/Container";
import { useState } from "react";
function App() {
  let [calVal, setCalVal] = useState("");

  function onButtonClick(buttonText) {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      setCalVal(calVal + buttonText);
    }
  }
  // function onButtonClick(e) {
  // console.log(e);
  //   setCalVal(calVal + e.target.lastChild.data);
  // }
  return (
    <Container>
      <div className={`${style["calculator"]}`}>
        <Display displayValue={calVal}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div>
    </Container>
  );
}

export default App;
