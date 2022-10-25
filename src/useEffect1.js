// Components are pure functions, and have a predictable output given a set of inputs.
// While sideEffect are interactions with the outside world, for example:
// 1. Making a request to an API for data from a backend server
// 2. To interact with browser APIs (that is, to use document or window directly)
// 3 .Using unpredictable timing functions like setTimeout or setInterval
// Side Effects are not pure, and can't be predicted.

import { useEffect } from "react";

export default function AppSideEffects() {
  return <UserGood name="John Doe" />;
}

function UserBad({ name }) {
  document.title = name;
  // This is a side effect. Don't do this in the component body!

  // If we perform a side effect directly in our component body, it gets in the way of our React component's rendering.
  // Side effects should be separated from the rendering process.
  //    If we need to perform a side effect, it should strictly be done after our component renders.

  return <h1>{name}</h1>;
}

function UserGood({ name }) {
  useEffect(() => {
    document.title = name;
  }, [name]);

  return <h1>{name}</h1>;
}

function MyComponentNoDepArray() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData("./Eric.json").then((myData) => setData(myData));
    // Error! useEffect runs after every render without the dependencies array, causing infinite loop
    // After the first render, useEffect will be run, state will be updated, which will cause a re-render, which will cause useEffect to run again, starting the process over again ad infinitum.
  });
}

function MyComponentWithDepArray() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((myData) => setData(myData));
    // Correct! Runs once after render with empty array
  }, []);

  return (
    <ul>
      {data.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function TimerNoCleanup() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => setTime(1), 1000);
    // counts up 1 every second
    // we need to stop using setInterval when component unmounts
    //   The problem with this if the component is destroying, is that setInterval
    // will try to update a variable a piece of state time that no longer exists. This is an error called a memory leak.
  }, []);
}

function TimerWithCleanUp() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => setTime(1), 1000);

    return () => {
      // setInterval cleared when component unmounts

      // The cleanup function will be called when the component is unmounted.

      // A common example of a component being unmounted is going to a new page or a new route in
      //    our application where the component is no longer rendered.

      // When a component is unmounted, our cleanup function runs, our interval is cleared,
      //   and we no longer get an error of attempting to update a state variable that doesn't exist.
      clearInterval(interval);
    };
  }, []);
}
