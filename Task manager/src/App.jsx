import { Header } from "./components/header.jsx";
import { Searchbar } from "./components/searchbar.jsx";
import { Cards } from "./components/taskCard.jsx";
import { useState } from "react";

export function App() {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      title: "",
      description: "",
      show: false,
    },
  ]);

  function updateTask(property, value) {
    setTask({
      ...task,
      [property]: value,
    });
  }

  const searchText = taskList.find((task) => !task.show).title;
  /*
  const filterTask = (text) => {
    const filteredList = taskList.filter((task) => {
      if (!task.show) return false;
      const regex = new RegExp(text, "i");
      if (text !== "") return regex.test(task.title);
      return true;
    });

    const defaultTask = taskList.find((task) => !task.show);

    return filteredList.length === 0 && searchText !== "" ? (
      <Cards
        key={defaultTask.id}
        {...defaultTask}
        showNewTaskCard={true}
        onClick={(newTask) => {
          setTaskList([
            ...taskList.filter((task) => task.show),
            { ...newTask, id: taskList.length + 1, show: true },
            { ...defaultTask, title: "", description: "" },
          ]);
        }}
      ></Cards>
    ) : (
      filteredList.map((filteredTask) => {
        return (
          <Cards
            key={filteredTask.id}
            {...filteredTask}
            showNewTaskCard={false}
            onClick={(newTask) => {
              const defaultTask = taskList.find((task) => !task.show);

              setTaskList([
                ...taskList.filter((task) => task.show),
                { ...newTask, id: taskList.length + 1, show: true },
                { ...defaultTask, title: "", description: "" },
              ]);
            }}
          ></Cards>
        );
      })
    );
  };
*/

  const filterTask = (text) => {
    const filteredList = taskList.filter((task) => {
      const regex = new RegExp(text, "i");
      if (text !== "") return regex.test(task.title);
      return true;
    });

    return filteredList.map((filteredTask) => {
      if (filteredList.length === 1 && searchText === "") return;
      if (filteredList.length > 1 && !filteredTask.show) return;
      return (
        <Cards
          key={filteredTask.id}
          {...filteredTask}
          showNewTaskCard={
            filteredList.length === 1 && searchText !== "" ? true : false
          }
          onClick={(newTask) => {
            const defaultTask = taskList.find((task) => !task.show);

            setTaskList([
              ...taskList.filter((task) => task.show),
              { ...newTask, id: taskList.length + 1, show: true },
              { ...defaultTask, title: "", description: "" },
            ]);
          }}
        ></Cards>
      );
    });
  };

  function onSearch(title) {
    const modifiedList = taskList.map((task) => {
      if (task.show) return task;
      return { ...task, title, description: "" };
    });
    setTaskList(modifiedList);
  }

  console.log(taskList);

  return (
    <>
      <Header></Header>
      <Searchbar onClick={(searchText) => onSearch(searchText)}></Searchbar>
      {filterTask(searchText)}
    </>
  );
}
