import TodoItem from "./TodoItem";
import styles from "./ToDoItems.module.css";

function ToDoItems({ todoItems, onDeleteItem }) {
  return (
    <>
      <div className={`${styles["items-container"]}`}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteClick={onDeleteItem}
          ></TodoItem>
        ))}
      </div>
    </>
  );
}
export default ToDoItems;
