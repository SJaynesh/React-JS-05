import { createElement, useState } from "react";
import "../public/css/App.css";

function App() {
  // let count = 10;
  let [count, setCount] = useState(0);

  // Syntax : let [state, function] = useState([defaultValue]);

  // console.log("Type : ", typeof count);
  // console.log("Type : ", typeof setCount);

  const h1Virtual = <h1 className="title">Hello Virtual DOM</h1>;
  const h1Real = createElement("h1");

  console.log(h1Virtual);

  console.log(h1Real);

  const increment = () => {
    // alert("Hello World");
    // count = count + 1; // 10 + 1 = 11 + 1 = 12
    // count = 95;
    setCount(count => count + 1);
    setCount(count => count + 1);
    setCount(count => count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // console.log("BTN is clicked...", count);
  };

  const decrement = () => {
    // let newCount = count - 1;
    count = count - 1;
    setCount(count);
  };

  return (
    <>
      {/* <h1 style={{ color: "blue", textAlign: "center" }}>Counter App</h1> */}
      <h1>Counter App</h1>
      <div style={{ textAlign: "center" }}>
        <h3>Val : {count}</h3>
        <button onClick={increment}>Increment +</button>
        <button onClick={decrement}>Decrement -</button>

        <p>My Count Value is : {count}</p>
      </div>
    </>
  );
}

export default App;
