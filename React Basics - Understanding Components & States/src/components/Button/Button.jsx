export function Button({ title, isSelected, ...props }) {
  console.log(title + " BUTTONS RENDERED");
  let classes = `btn ${
    isSelected ? "btn-primary" : "btn-light"
  } d-inline-flex align-items-center me-5`;
  return (
    <>
      <button className={classes} type="button" {...props}>
        {title}
      </button>
    </>
  );
}
