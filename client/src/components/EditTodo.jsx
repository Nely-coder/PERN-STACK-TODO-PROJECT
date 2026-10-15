import { useState } from "react";
import API_URL from "../api";

export default function EditTodo({ todo }) {
  const [description, setDescription] = useState(todo.description);

  async function updateDescription(e) {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description }),
      });

      if (!response.ok) {
        throw new Error("Failed to update todo");
      }

      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div
        className="modal"
        id={`id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              />
            </div>

            <div className="modal-body">
              <input
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                type="text"
                value={description}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={updateDescription}
              >
                Edit
              </button>

              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
