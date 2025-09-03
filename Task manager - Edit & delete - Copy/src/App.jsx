import { Searchbar } from "./components/input.jsx";
import { Cards } from "./components/taskCard.jsx";
import { useState } from "react";

export function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <div className="container p-2">
        <h2>Todo_list</h2>
      </div>
      <div className="my-2 text-center box">
        <Searchbar
          onTaskAddition={(title) =>
            setTaskList([...taskList, { id: taskList.length + 1, title }])
          }
        ></Searchbar>
        {taskList.map((item) => (
          <Cards
            key={item.id}
            {...item}
            onTaskEdit={(editedTask) => setTask(editedTask)}
            onTaskUpdate={(updatedTask) => {
              setTaskList(
                taskList.map((item) => {
                  if (item.id === updatedTask.id) return updatedTask;
                  return item;
                })
              );
            }}
          ></Cards>
        ))}
      </div>
    </>
  );
}
