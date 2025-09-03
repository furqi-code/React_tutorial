import { useState } from "react";

export function Cards({ id, title, onTaskEdit, onTaskUpdate, onTaskDelete, ...props }) {
  const [isEditing, setisEditing] = useState(false);
  const [task, setTask] = useState({
    id,
    title,
  });
  return (
    <div className="">
      <a
        href="#"
        className="list-group-item list-group-item-action d-flex gap-3 py-3"
        aria-current="true"
      >
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          width="32"
          height="32"
          className="rounded-circle flex-shrink-0"
        />
        <div className="d-flex gap-2 w-100 justify-content-between">
          <div>
            {!isEditing && <h6 className="mb-0">{title}</h6>}
            {isEditing && (
              <input
                className="form-control me-2"
                type="text"
                placeholder="Edit this Task"
                name="title"
                defaultValue={task.title}
                onChange={(event) => {
                  setTask({
                    ...task,
                    title: event.target.value,
                  });
                }}
              ></input>
            )}
            <p className="mb-0 opacity-75">Sample Description</p>
          </div>
          <small className="opacity-50 text-nowrap">Now</small>
          {!isEditing && (
            <button
              type="button"
              className="btn btn-outline-warning"
              onClick={() => {
                setisEditing(true);
              }}
            >
              Edit
            </button>
          )}
          {!isEditing && (
            <button type="button" className="btn btn-outline-danger" onClick={() => {onTaskDelete(task.id)}}>
              Delete
            </button>
          )}
          {isEditing && (
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => {
                setisEditing(false);
                onTaskUpdate(task);
              }}
            >
              Save
            </button>
          )}
        </div>
      </a>
    </div>
  );
}
