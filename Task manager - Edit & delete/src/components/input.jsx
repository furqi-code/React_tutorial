export function Searchbar({ onClick, task, type, ...props }) {
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
          value={task}
          onChange={type} 
          // {...props}
        />
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={onClick}
        >
          Add
        </button>
      </form>
    </>
  );
}
