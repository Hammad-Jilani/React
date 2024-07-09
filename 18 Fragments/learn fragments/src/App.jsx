import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from "./Components/FoodItem";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  // let food = [];
  // let food = [
  //   "Lentil",
  //   "Green Vegetables",
  //   "Milk",
  //   "Bread",
  //   "Almonds",
  //   "Dates",
  // ];
  // 1. if (food.length == 0) {
  //   return <h3>I am is Hungry</h3>;
  // }

  //

  // let textStateArr = useState();
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // let [textToShow, setTextState] = useState();"Daal", "Green Vegetables", "Milk"
  let [food, setFoodItems] = useState([]);

  // prop functions
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      let newFoodItem = e.target.value;
      let newItems = [...food, newFoodItem];
      setFoodItems(newItems);
      console.log("Food value entered is " + newFoodItem);
    }
  };

  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      {/* 2. {food.length == 0 ? <h3>I am hungry</h3> : null} */}
      {/* {food.length === 0 && <h3>I am Still Hungrys</h3>} */}

      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      <ErrorMessage item={food}></ErrorMessage>
      <FoodItem item={food}></FoodItem>
    </Container>
  );
}

export default App;
