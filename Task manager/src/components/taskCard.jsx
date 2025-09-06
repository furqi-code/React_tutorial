import { useState } from "react";

export function Cards({ id, title, description, showNewTaskCard, onClick }) {
  const [task, setTask] = useState({
    id,
    title,
    description,
  });
  return (
    <div class="todo-card my-4">
      {showNewTaskCard ? (
        <>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Title"
            aria-label="Search"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
          <input
            className="form-control me-2"
            type="search"
            placeholder="Desc"
            aria-label="Search"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onClick(task)}
          >
            Add
          </button>
        </>
      ) : (
        <div>
          <h2 class="todo-title">{title}</h2>
          <p class="todo-description">{description}</p>
        </div>
      )}
    </div>
  );
}
