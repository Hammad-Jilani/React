import TodoItem from "./TodoItem";
import styles from "./ToDoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function ToDoItems({ onDeleteItem }) {
  const { todoItems } = useContext(TodoItemsContext);

  console.log(todoItems);
  return (
    <>
      <div className={`${styles["items-container"]}`}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
          ></TodoItem>
        ))}
      </div>
    </>
  );
}
export default ToDoItems;
