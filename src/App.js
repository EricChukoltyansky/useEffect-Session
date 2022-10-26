import "./App.css";
import { useState } from "/useState.js";

function App() {
  const [count, setCount] = useState(0);

  // Directly update state
  const update = () => setCount(count + 1);

  // Directly update state after 3 sec
  const asyncUpdate = () => {
    setTimeout(() => {
      setCount((currentCount) => currentCount + 1);
    }, 2000);
  };

  // Render UI
  return (
    <div className="App">
      <span>Count: {count}</span>
      <button onClick={update}>Add +1</button>
      <button onClick={asyncUpdate}>Add +1 later</button>
    </div>
  );
}

export default App;
