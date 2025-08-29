export function Title({ content }) {
  return (
    <div
      className={content === "home" ? "text-center" : ""}
      style={{
        color: "red",
      }}
    >
      <h2>{content}</h2>
    </div>
  );
}
