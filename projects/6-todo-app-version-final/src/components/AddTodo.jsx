import { useState } from "react";
import style from "./AddTodo.module.css";
import { IoAdd } from "react-icons/io5";
function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  let handleNameChange = (e) => {
    setTodoName(e.target.value);
  };
  let handleDateChange = (e) => {
    setDueDate(e.target.value);
  };
  function handleAddButton() {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  }
  return (
    <div className="container">
      <div className={`${style["hj-row"]}  row`}>
        <div className="col-lg">
          <input
            type="text"
            placeholder="Enter todo"
            onChange={handleNameChange}
            value={todoName}
          />
        </div>
        <div className="col-lg">
          <input type="date" onChange={handleDateChange} value={dueDate} />
        </div>
        <div className={`col-lg ${style["items-container"]}`}>
          <button
            type="button"
            className={`btn btn-success ${style["hj-btn"]} `}
            onClick={handleAddButton}
          >
            <IoAdd /> Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
