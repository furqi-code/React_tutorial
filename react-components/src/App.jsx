export function App() {
  const username = "Usmaan";

  const usernames = ["Furqan", "Danish", "Usmaan", "Ghufran", "Hussain"];

  return (
    <div>
      <h1>{username}</h1>
      <Title inputParam={usernames} alt="Maha gandu"></Title>
      {usernames.map(function (username) {
        return <h1>{username}</h1>;
      })}
    </div>
  );
}

function Title(props) {
  return (
    <div>
      <h1>{props.alt}</h1>
    </div>
  );
}
