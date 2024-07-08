import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from "./Components/FoodItem";
import ErrorMessage from "./Components/ErrorMessage";

function App() {
  // let food = [];
  let food = [
    "Lentil",
    "Green Vegetables",
    "Milk",
    "Bread",
    "Almonds",
    "Dates",
  ];
  // 1. if (food.length == 0) {
  //   return <h3>I am is Hungry</h3>;
  // }

  //
  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      {/* 2. {food.length == 0 ? <h3>I am hungry</h3> : null} */}
      {/* {food.length === 0 && <h3>I am Still Hungrys</h3>} */}
      <ErrorMessage item={food}></ErrorMessage>
      <FoodItem item={food}></FoodItem>
    </>
  );
}

export default App;
