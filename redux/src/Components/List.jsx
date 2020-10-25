import React from "react";

const List = ({ todos }) => {
  const todoList = todos.map((data, index) => <li key={index}>{data}</li>);
  return (
    <div>
      <ul>{todoList}</ul>
    </div>
  );
};

export default List;
