import style from "./TodoItem.module.css";
function TodoItem({ todoName, todoDate }) {
  return (
    <div className="container">
      <div className={`row ${style["hj-row"]}`}>
        <div className="col-lg">{todoName}</div>
        <div className="col-lg">{todoDate}</div>
        <div className="col-lg">
          <button type="button" className={`btn btn-danger ${style["hj-btn"]}`}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
