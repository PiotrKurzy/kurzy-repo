import "./App.css";

import { useState, useEffect } from "react";
import { v4 } from "uuid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CheckIcon from "@mui/icons-material/Check";

// import React from "react";
// import Select from "react-select";
// import { useState, useEffect } from "react";
// import BasicRating from "./components/BasicRating";

function App() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const itemsfromLS = localStorage.getItem("items");
    const countfromLS = localStorage.getItem("count");
    if (itemsfromLS) {
      setItems(JSON.parse(itemsfromLS));
    }
    if (countfromLS) {
      setCount(countfromLS);
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

  const addAmountCart = () => {
    setCount((prevCount) => {
      const newCount = Number(prevCount) + 1;
      localStorage.setItem("count", newCount);
      return newCount;
    });
  };

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
      },
    ];
    setItems(newItems);
    setValue("");
    addAmountCart();
  };
  const handleOnKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleClick();
    }
  };
  const saveToLocalStorage = () => {
    localStorage.setItem(`items`, JSON.stringify(items));
  };

  const markAsCompleted = (id) => {
    const index = items.findIndex((item) => item.id === id);
    const newItem = {
      ...items[index],
      dateAndTimeofEdit,
      isCompleted: !items[index].isCompleted,
    };
    const newItems = [...items];
    newItems.splice(index, 1, newItem);
    setItems(newItems);
  };

  const removeItem = (id) => {
    const index = items.findIndex((item) => item.id === id);
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  console.log(`items`, items);

  return (
    <div>
      <div>
        <h3>Number of entered tasks: {count}</h3>
      </div>
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
          {items.map((item) => (
            <li key={item.id}>
              <div>
                <span className={item.isCompleted ? "text-strike" : null}>
                  {item.value} - {item.dateAndTime} - {item.dateAndTimeofEdit}
                </span>
                <CheckIcon
                  id="checkIcon"
                  onClick={() => markAsCompleted(item.id)}
                />
                <DeleteForeverIcon onClick={() => removeItem(item.id)} />
                <select id="selectPriority">
                  <option value="empty">---</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <button onClick={saveToLocalStorage}>Save to local storage</button>
    </div>
  );
}

export default App;

// input do wprowadzania zadań
// lista zadań
// zadanie (opcje - usuń, zaznacz, że jest zrobione)
