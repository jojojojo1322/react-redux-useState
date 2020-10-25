import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./Components/List";

const App = () => {
  const [todos, setTodos] = useState(["첫번째", "두번째"]);
  const [newTodos, setNewTodos] = useState();

  const handleChangeTodo = (e) => {
    setNewTodos(e.target.value);
  };

  const AddTodos = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodos]);
  };

  useEffect(() => {
    console.log("렌더링", todos);
  }, [todos]);

  return (
    <div>
      <h1>To-Do</h1>

      <form action="">
        <input type="text" name="" onChange={handleChangeTodo} />
        <button onClick={AddTodos}>할일추가</button>
        <button onClick={AddTodos}>할일삭제</button>
      </form>
      <List todos={todos} />
    </div>
  );
};

export default App;
