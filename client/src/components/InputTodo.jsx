import { useState } from "react";
import API_URL from "../api";

export default function InputTodo() {
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description }),
      });

      if (!response.ok) {
        throw new Error("Failed to add todo");
      }

      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
}
