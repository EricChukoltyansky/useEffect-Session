import React, { useState } from "react";

const App = () => {
  const [stateObj, setStateObj] = useState({ count: 4, theme: "blue" });
  const [stateArr, setStateArr] = useState([4, "blue"]);

  function decrement() {
    // !     BAD
    // setStateObj({ count: stateObj.count - 1 });

    // !     GOOD
    //  setStateObj(prevState => {
          //      return {...prevState, count: prevState.count - 1}
          // })

    // !     BAD
     setStateArr([stateArr[0] - 1]); 

    // !     GOOD
    //        setStateArr(prevState => {
    //            return [...prevState, prevState[0] - 1]
    // })
  }

  function increment() {
    setStateObj((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
    setStateArr((prevState) => {
      return [...prevState, prevState[0] + 1];
    });
  }

  function addToArray() {
    setStateArr((prevState) => {
      return [...prevState, "new item"];
    });
  }

  function removeFromArray() {
    setStateArr((prevState) => {
      return prevState.filter((item) => item !== "new item");
    });
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <button onClick={decrement}>-</button>
        <button>0</button>
        <button onClick={increment}>+</button>
        <button onClick={removeFromArray}>Add To Array</button>
        <button onClick={addToArray}>Remove From Array</button>
        <h1>{stateObj.count}</h1>
        <h1>{stateObj.theme}</h1>
        <h1>{stateArr[0]}</h1>
        <h1>{stateArr[1]}</h1>
      </div>
    </>
  );
};

export default App;
