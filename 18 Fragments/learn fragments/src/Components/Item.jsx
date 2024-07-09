import styles from "./Item.module.css";

function Item(props /*3.{foodItem}*/) {
  //2. React nay props ko Object bana dia hai aur ab isi destructuring ho sakhti h
  const { foodItem, bought, handleBuyButton } = props;
  //1. return <li className="list-group-item">{props.foodItem}</li>;
  return (
    <li
      className={`/*${styles["kg-item"]} */ list-group-item ${
        bought && "active"
      }`}
    >
      <span className={`${styles["kg-span"]}`}>{foodItem}</span>
      <button
        type="button"
        className={`${styles["button"]} btn btn-warning`}
        // onClick={() => window.alert(`${props.foodItem} is selected`)}
        onClick={handleBuyButton}
        bought={true}
      >
        Buy
      </button>
    </li>
  );
}
export default Item;
