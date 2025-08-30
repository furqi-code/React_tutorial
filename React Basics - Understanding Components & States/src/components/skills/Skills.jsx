import { SKILLS } from "../../constants";
import { Card } from "../Card/Card.jsx";

export function Skills(props) {
  return (
    <>
      <div className="row">
        {SKILLS.map((skill) => (
          <Card {...skill}></Card>
        ))}
      </div>
    </>
  );
}
