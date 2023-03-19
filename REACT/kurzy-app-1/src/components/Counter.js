import { useState, useEffect } from "react";

const Counter = ({ items }) => {
  const [counter, setCounter] = useState(items.length + 3);

  // function saveCounterToLocalStorage() {
  //   localStorage.setItem("counter", JSON.stringify(counter));
  // }

  useEffect(() => {
    const countfromLS = localStorage.getItem("counter");
    if (countfromLS) {
      setCounter(JSON.parse(countfromLS - 2));
    }
  }, []);

  useEffect(() => {
    setCounter((prevCount) => prevCount + 1);
  }, [items.length]);

  return (
    <div>
      <h3>Number of entered tasks: {counter} </h3>
    </div>
  );
};
export default Counter;
