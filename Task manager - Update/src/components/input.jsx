export function Searchbar({ onChange, onClick }) {

  
  return (
    <>
      <div className="my-2 text-center search">
        <div className="mb-3">
          {/* <label for="exampleFormControlInput1" class="form-label">Search</label> */}
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter a task"
            name="title"
            // defaultValue={task}
            onChange={onChange}
          />
        </div>

        <div className="">
          <button type="button" className="btn btn-primary" onClick={onClick}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}
