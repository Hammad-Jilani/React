import styles from "./FoodInput.module.css";
function FoodInput({ handleKeyDown }) {
  return (
    <input
      type="text"
      className={styles["set"]}
      placeholder="Enter Food Item Here"
      onKeyDown={handleKeyDown}
    ></input>
  );
}
export default FoodInput;
