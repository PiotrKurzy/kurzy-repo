import "./App.css";

import { useState } from "react";
import { v4 } from "uuid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CheckIcon from "@mui/icons-material/Check";

// import { useState, useEffect } from "react";
// import BasicRating from "./components/BasicRating";

function App() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    // console.log(`event`, event.target.value);
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

  const markAsCompleted = (id) => {
    const currentItem = items.find((item) => item.id === id);
    const newItem = {
      ...currentItem,
      isCompleted: !currentItem.isCompleted,
    };
    const index = items.findIndex((item) => item.id === id);
    const newItems = [...items].splice(index, 0, newItem);
    setItems(newItems);
    console.log(`currentItem`, currentItem);
  };
  const removeItem = () => {};

  console.log(`items`, items);

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
                <span>{item.value}</span>
                <CheckIcon onClick={() => markAsCompleted(item.id)} />
                <DeleteForeverIcon onClick={removeItem} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

// input do wprowadzania zadań
// lista zadań
// zadanie (opcje - usuń, zaznacz, że jest zrobione)
