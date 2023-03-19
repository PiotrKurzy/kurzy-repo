import "./App.css";

import { useState, useEffect } from "react";
import { v4 } from "uuid";
import Counter from "./components/Counter.js";
import AllTasks from "./components/AllTasks.js";
import AllTasksHP from "./components/AllTasksHP.js";

function App() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsfromLS = localStorage.getItem("items");
    if (itemsfromLS) {
      setItems(JSON.parse(itemsfromLS));
    }
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const current = new Date();
  const dateAndTime = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}/${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;

  const dateAndTimeofEdit = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}/${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;

  const handleClick = () => {
    const newItems = [
      ...items,
      {
        id: v4(),
        value,
        dateAndTime,
        isCompleted: false,
        dateAndTime,
        dateAndTimeofEdit,
        priority: "empty",
      },
    ];
    setItems(newItems);
    setValue("");
  };

  const handleOnKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleClick();
    }
  };
  const saveToLocalStorage = () => {
    localStorage.setItem("items", JSON.stringify(items));
  };

  return (
    <div>
      <Counter items={items}></Counter>
      <div>
        <input
          onChange={handleChange}
          value={value}
          onKeyDown={handleOnKeyDown}
        />
        <button onClick={handleClick}>Dodaj</button>
      </div>
      <div>
        <ol>
          <AllTasks items={items} setItems={setItems}></AllTasks>
        </ol>
      </div>
      <button onClick={saveToLocalStorage}>Save to local storage</button>
      <div>
        <div>
          <h3 id="highPriorityTaskListHeader">High-priority task list:</h3>
        </div>
        <ol>
          <AllTasksHP items={items} setItems={setItems}></AllTasksHP>
        </ol>
      </div>
    </div>
  );
}
export default App;
