import { useState } from "react";
import Item from "./Item";

function FoodItem({ item }) {
  let [activeItems, setActiveItems] = useState([]);
  function onBuyButton(items, event) {
    let newItems = [...activeItems, items];
    setActiveItems(newItems);
  }
  return (
    <ul className="list-group">
      {item.map((items) => (
        <Item
          key={items}
          foodItem={items}
          bought={activeItems.includes(items)}
          handleBuyButton={(event) => onBuyButton(items, event)}
        ></Item>
      ))}
    </ul>
  );
}
export default FoodItem;
