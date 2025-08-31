import { Tasks } from "./constant";
import { Searchbar } from "./components/input.jsx";
import { Cards } from "./components/taskCard.jsx";
import { useState } from "react";

export function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState({});

  const onKeyUp = (event) => setTask(event.target.value);

  return (
    <>
      <Searchbar
        onKeyUp={onKeyUp}
        onClick={() => setTaskList([...taskList, { title: task }])}
      />
      {taskList.length === 0 && <h1 className="text-center">Add a Task</h1>}

      {taskList.length > 0 && (
        <div className="my-2 text-center box">
          {taskList.map((item) => (
            <Cards
              title="dvdf"
              discription={item.title}
              status="Done"
              key={item.title}
            ></Cards>
          ))}
        </div>
      )}
    </>
  );
}
