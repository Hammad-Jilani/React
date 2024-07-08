import styles from "./Item.module.css";

function Item(props /*3.{foodItem}*/) {
  //2. React nay props ko Object bana dia hai aur ab isi destructuring ho sakhti h
  const { foodItem } = props;
  //1. return <li className="list-group-item">{props.foodItem}</li>;
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={`${styles["kg-span"]}`}>{foodItem}</span>
    </li>
  );
}
export default Item;
