import { useState } from "react";

export function Cards({ title, discription, status, onClick, onChange }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="">
      <a
        href="#"
        className="list-group-item list-group-item-action d-flex gap-3 py-3"
        aria-current="true"
      >
        <img
          src="https://github.com/twbs.png"
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
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter a task"
                name="title"
                defaultValue={title}
                onChange={onChange}
              ></input>
            )}
            <p className="mb-0 opacity-75">{discription}</p>
          </div>
          <small className="opacity-50 text-nowrap">{status}</small>
          {!isEditing && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          )}
          {isEditing && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                onClick();
                setIsEditing(false);
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
