import { Searchbar } from "./components/input.jsx";
import { Cards } from "./components/taskCard.jsx";
import { useState } from "react";

export function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  const onChange = (event) => setTask(event.target.value);

  return (
    <>
      <Searchbar
        onChange={onChange}
        onClick={() =>
          setTaskList([
            ...taskList,
            {
              id: Math.floor(Math.random() * 11),
              title: task,
              description: "whtwhtwhtwht",
              status: "today",
            },
          ])
        }
      />
      {taskList.length === 0 && <h1 className="text-center">Add a Task</h1>}

      {taskList.length > 0 && (
        <div className="my-2 text-center box">
          {taskList.map((item) => (
            <Cards
              title={item.title}
              discription="lolololololol"
              status="Done"
              key={item.title}
              onChange={onChange}
              onClick={() => setTaskList([...taskList, { title: task }])}
            ></Cards>
          ))}
        </div>
      )}
    </>
  );
}
