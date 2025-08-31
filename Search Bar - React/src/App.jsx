import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { Tasks } from "./constant";
import { Cards } from "./components/taskCard";

export function App() {
  const [searchText, setSearchText] = useState("");

  // const filterTasks = () =>
  //   Tasks.filter((task) => task.title.startsWith(searchText))
  //   .map((filteredTask) => <Cards {...filteredTask}></Cards>);

  const filterTasks = () =>
    Tasks.filter((task) => {
      if (searchText === "") return true;
      const regex = new RegExp(`${searchText}`, "i");
      return regex.test(task.title);
    }).map((filteredTask) => <Cards {...filteredTask}></Cards>);

  return (
    <>
      <SearchBar
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      ></SearchBar>
      {filterTasks()}
    </>
  );
}
