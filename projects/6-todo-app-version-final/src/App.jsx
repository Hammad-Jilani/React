import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  // const initiaTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Take Shower",
  //     dueDate: "4/10/2023",
  //   },
  // ];
  let [todoItems, setTodoItems] = useState(/*initiaTodoItems*/ []);

  const handleNewItem = (itemName, itemDate) => {
    let newObject = [...todoItems, { name: itemName, dueDate: itemDate }];
    setTodoItems(newObject);
    // setTodoItems((currValues) => [...currValues], {
    //   name: itemName,
    //   dueDate: itemDate,
    // });
  };

  function handleDelete(todoItemName) {
    const newToDoItems = todoItems.filter((item) => item.name != todoItemName);
    setTodoItems(newToDoItems);
  }
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <ToDoItems
        kr
        todoItems={todoItems}
        onDeleteItem={handleDelete}
      ></ToDoItems>
    </center>
  );
}

export default App;
