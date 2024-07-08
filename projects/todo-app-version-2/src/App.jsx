import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Take Shower",
      dueDate: "4/10/2023",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <ToDoItems todoItems={todoItems}></ToDoItems>
    </center>
  );
}

export default App;
