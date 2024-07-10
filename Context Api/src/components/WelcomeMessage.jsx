import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
import style from "./WelcomeMessage.module.css";
function WelcomeMessage() {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && (
      <p className={`${style["welcome"]}`}>Enjoy your day</p>
    )
  );
}
export default WelcomeMessage;
