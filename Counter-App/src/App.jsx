import "../public/css/App.css";
function App() {
  let count = 10;

  const increment = () => {
    // alert("Hello World");
    count = count + 1; // 10 + 1 = 11 + 1 = 12
    console.log("BTN is clicked...", count);
  };

  return (
    <>
      {/* <h1 style={{ color: "blue", textAlign: "center" }}>Counter App</h1> */}
      <h1>Counter App</h1>
      <div style={{ textAlign: "center" }}>
        <h3>{count}</h3>
        <button onClick={increment}>Increment +</button>
        <button>Decrement -</button>
        <button onClick={() => window.print()}>Print</button>
      </div>
    </>
  );
}

export default App;
