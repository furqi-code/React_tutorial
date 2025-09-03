import { Searchbar } from "./components/input.jsx";
import { Cards } from "./components/taskCard.jsx";
import { useState } from "react";

export function App() {
  let [task, setTask] = useState("");
  let [taskList, setTaskList] = useState([]);
  let [updatedTask, setUpdatedTask] = useState("");

  const deletingTask = (id) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id != id ;
      })
    );
  };

  const updatingTask = (id) => {
    setTaskList(
      taskList.map((task) => {
        return task.id === id
          ? {
              id: task.id,
              title: updatedTask,
              discription: task.discription,
              status: "just now",
            }
          : task;
      })
    );
  };

  const addTask = () => {
    if (taskList.length === 0)
      return <h5 className="text-center p-2">Zero task added</h5>;
    return taskList.map((task) => (
      <Cards
        key={task.id}
        {...task}
        value={updatedTask}
        onChange={(event) => setUpdatedTask(event.target.value)}
        editingTask={updatingTask}
        removingTask={deletingTask}
      ></Cards>
    ));
  };
  console.log(taskList);

  return (
    <>
    <div className="container p-2"><h2>Todo_list</h2></div>
      <div className="my-2 text-center box">
        {/* <Searchbar
          onKeyUp={(event) => setTask(event.target.value)}
          onClick={() => setTaskList([...taskList, { title: Task }])}
        ></Searchbar> */}

        {/* Another wayy to use eventListener (isme ...spread op use nhi kra)*/}
        <Searchbar
          task={task}
          type={(event) => setTask(event.target.value)}
          onClick={() =>
            setTaskList([
              ...taskList,
              {
                id: Math.floor(Math.random() * 21),
                title: task,
                discription: "qwertyxyz",
                status: "Today",
              },
            ])
          }
        ></Searchbar>

        {addTask()}
      </div>
    </>
  );
}
