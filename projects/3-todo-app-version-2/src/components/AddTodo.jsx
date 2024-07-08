import style from "./AddTodo.module.css";
function AddTodo() {
  return (
    <div className="container">
      <div className={`${style["hj-row"]}  row`}>
        <div className="col-lg">
          <input type="text" placeholder="Enter todo" />
        </div>
        <div className="col-lg">
          <input type="date" />
        </div>
        <div className={`col-lg ${style["items-container"]}`}>
          <button
            type="button"
            className={`btn btn-success ${style["hj-btn"]} `}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
