import "./App.css";
import { useState, useEffect } from "/useState.js";

const App = () => {
  const [buttonName, setButtonName] = useState("posts");

  return (
    <>
      <div>
        <button onClick={() => setButtonName("posts")}>Posts</button>
        <button onClick={() => setButtonName("Users")}>Users</button>
        <button onClick={() => setButtonName("Comments")}>Comments</button>
      </div>
      <h1>{buttonName}</h1>
    </>
  );
};

export default App;
