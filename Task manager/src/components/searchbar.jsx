import { useState } from "react";

export function Searchbar({ onClick }) {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onClick(searchText)}
        >
          Search
        </button>
      </form>
    </>
  );
}
