import { useState } from "react";

export function Searchbar({ onTaskAddition }) {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Add a Task"
          aria-label="Search"
          id="exampleFormControlInput1"
          name="title"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => onTaskAddition(searchText)}
        >
          Add
        </button>
      </form>
    </>
  );
}
