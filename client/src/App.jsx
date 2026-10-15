import React, { Fragment } from "react";
import InputTodo from "./components/InputTodo";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ListTodos from "./components/ListTodo";

export default function App() {
  return (
    <>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </>
  );
}
