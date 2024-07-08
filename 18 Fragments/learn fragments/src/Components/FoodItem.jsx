import Item from "./Item";
function FoodItem({ item }) {
  return (
    <ul className="list-group">
      {item.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
}
export default FoodItem;
