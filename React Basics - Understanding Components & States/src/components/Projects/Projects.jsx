import { PROJECT_BUTTONS } from "../../constants";
import { Button } from "../Button/Button";
import { useState } from "react";

export function Projects(props) {
  const [selectedProject, setProject] = useState();
console.log('PROJECTS RENDERED')
  return (
    <>
      <div className="text-center">
        {PROJECT_BUTTONS.map((btnTitle) => (
          <Button
            title={btnTitle}
            onClick={() => setProject(btnTitle)}
            isSelected={selectedProject === btnTitle}
          ></Button>
        ))}
      </div>
      {selectedProject}
    </>
  );
}
