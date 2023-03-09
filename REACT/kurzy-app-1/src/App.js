import "./App.css";

import { useState, useEffect } from "react";
import { v4 } from "uuid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CheckIcon from "@mui/icons-material/Check";

// import { useState, useEffect } from "react";
// import BasicRating from "./components/BasicRating";

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
  const handleClick = () => {
    const newItems = [
      ...items,
      {
        id: v4(),
        value,
        isCompleted: false,
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
    localStorage.setItem(`items`, JSON.stringify(items));
  };

  const markAsCompleted = (id) => {
    const index = items.findIndex((item) => item.id === id);
    const newItem = {
      ...items[index],
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

  const date = () => {
    console.log(`date`, date);
  };

  console.log(`items`, items);
  console.log(`date`, date);

  return (
    <div>
      <div>
        <input
          onChange={handleChange}
          value={value}
          onKeyDown={handleOnKeyDown}
        />
        <button onClick={handleClick}>Dodaj</button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <div>
                <span className={item.isCompleted ? "text-strike" : null}>
                  {item.value}
                </span>
                <CheckIcon onClick={() => markAsCompleted(item.id)} />
                <DeleteForeverIcon onClick={() => removeItem(item.id)} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={saveToLocalStorage}>Save to local storage</button>
      <button onClick={date}>Time</button>
    </div>
  );
}

export default App;

// input do wprowadzania zadań
// lista zadań
// zadanie (opcje - usuń, zaznacz, że jest zrobione)
