import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import { useState, useReducer } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItemsReducer = (state, action) => {
  let newObject = state;
  if (action.type === "NEW_ITEM") {
    newObject = [
      ...state,
      { name: action.payload.itemName, dueDate: action.payload.itemDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newObject = state.filter((item) => item.name !== action.payload.itemName);
  }
  return newObject;
};
function App() {
  const [todoItems, dispatchToDoItems] = useReducer(todoItemsReducer, []);

  const addItem = (itemName, itemDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName: itemName,
        itemDate: itemDate,
      },
    };
    // newItemAction is action in reduce function
    dispatchToDoItems(newItemAction);
  };
  function deleteItem(todoItemName) {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchToDoItems(deleteItemAction);
  }
  return (
    // TodoItemsContext
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMessage></WelcomeMessage>
        <ToDoItems></ToDoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
