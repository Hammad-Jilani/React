import TodoItem from "./TodoItem";
import styles from "./ToDoItems.module.css";

function ToDoItems({ todoItems }) {
  return (
    <>
      <div className={`${styles["items-container"]}`}>
        {todoItems.map((item) => (
          <TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>
        ))}
      </div>
    </>
  );
}
export default ToDoItems;
