function TodoItem1(params) {
  let todoName = "Buy Milk";
  let todoDate = "4/10/2023";
  return (
    <div class="container">
      <div class="row hj-row">
        <div class="col-lg">{todoName}</div>
        <div class="col-lg">{todoDate}</div>
        <div class="col-lg">
          <button type="button" class="btn btn-danger hj-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
