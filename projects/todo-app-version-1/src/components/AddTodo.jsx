function AddTodo() {
  return (
    <div class="container">
      <div class="row hj-row">
        <div class="col-lg">
          <input type="text" placeholder="Enter todo" />
        </div>
        <div class="col-lg">
          <input type="date" />
        </div>
        <div class="col-lg">
          <button type="button" class="btn btn-success hj-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
