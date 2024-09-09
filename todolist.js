import React, { useState } from "react";
import Button from "@mui/material/Button";
import Todolist from "./todolist";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handlerform = (e) => {
    e.preventDefault();
    const newtodos = [...todos, input];
    setTodos(newtodos);
    setInput("");
  };

   const DeleteHandler = (indexValue) =>{
    const newTodos = todos.filter((todo,index) => index !== indexValue);
    setTodos(newTodos);
  }

   const Edithandler = (indexValue, editedTodo) => {
    const newTodos = [...todos];
    newTodos[indexValue] = editedTodo;
    setTodos(newTodos);
  };

  return (
    <div>
      <center className="container mt-5 w-50">
        <form onSubmit={handlerform} className="w-50">
          <input
            type="text"
            className="form-control"
            value={input}
            size="small"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button type="submit" variant="contained">
            Add
          </Button>
        </form>
        <Todolist todos={todos}  DeleteHandler={DeleteHandler} Edithandler={Edithandler}/>
      </center>
    </div>
  );
};

export default App;


import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Todolist = ({ todos, DeleteHandler, Edithandler }) => {
  const handleEdit = (index) => {
    const editedTodo = prompt("Edit the todo:", todos[index]);
    if (editedTodo !== null) {
      Edithandler(index, editedTodo);
    }
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <h1>
            {todo} &nbsp;
            <DeleteIcon sx={{ color: "red" }} onClick={() => DeleteHandler(index)} />
            <EditIcon sx={{ color: "blue" }} onClick={() => handleEdit(index)} />
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Todolist;
