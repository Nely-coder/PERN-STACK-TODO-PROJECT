import { useEffect, useState } from "react";
import EditTodo from "./EditTodo";
import API_URL from "../api";

export default function ListTodos() {
  const [todos, setTodos] = useState([]);

  async function deleteTodo(id) {
    try {
      const response = await fetch(`${API_URL}/todos/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete todo");
      }

      setTodos((previousTodos) =>
        previousTodos.filter((todo) => todo.todo_id !== id),
      );
    } catch (error) {
      console.error(error.message);
    }
  }

  async function getTodos() {
    try {
      const response = await fetch(`${API_URL}/todos`);

      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }

      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  onClick={() => deleteTodo(todo.todo_id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
