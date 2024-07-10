import style from "./TodoItem.module.css";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
function TodoItem({ todoName, todoDate, onDeleteClick }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className={`row ${style["hj-row"]}`}>
        <div className="col-lg">{todoName}</div>
        <div className="col-lg">{todoDate}</div>
        <div className="col-lg">
          <button
            type="button"
            className={`btn btn-danger ${style["hj-btn"]}`}
            onClick={() => deleteItem(todoName)}
          >
            <MdDeleteForever />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
