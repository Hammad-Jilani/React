import { useRef, useState } from "react";
import style from "./AddTodo.module.css";
import { IoAdd } from "react-icons/io5";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function AddTodo() {
  // const [todoName, setTodoName] = useState();
  // const [dueDate, setDueDate] = useState();

  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // let handleNameChange = (e) => {
  //   setTodoName(e.target.value);
  // };
  // let handleDateChange = (e) => {
  //   setDueDate(e.target.value);
  // };
  function handleAddButton(event) {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
    // setDueDate("");
    // setTodoName("");
  }
  return (
    <div className="container">
      <form className={`${style["hj-row"]}  row`} onSubmit={handleAddButton}>
        <div className="col-lg">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter todo"
            // onChange={handleNameChange}
            // value={todoName}
          />
        </div>
        <div className="col-lg">
          <input
            type="date"
            ref={dueDateElement}
            // onChange={handleDateChange}
            // value={dueDate}
          />
        </div>
        <div className={`col-lg ${style["items-container"]}`}>
          <button
            type="submit"
            className={`btn btn-success ${style["hj-btn"]} `}
          >
            <IoAdd /> Add
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
