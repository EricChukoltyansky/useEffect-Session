import { useEffect, useState } from "react";
// A functional React component uses props and/or state to calculate the output.
//  If the functional component makes calculations that don't target the output value,
//  then these calculations are named side-effects.

// Examples of side-effects are fetch requests, manipulating DOM directly, using timer functions like setTimeout(), and more.

// The component rendering and side-effect logic are independent.
// It would be a mistake to perform side-effects directly in the body of the component,
//  which is primarily used to compute the output.

// How often the component renders isn't something you can control —
// if React wants to render the component, you cannot stop it.

// However, you can control when the side-effects are performed.


// import { useState, useEffect } from "/useState.js";

// const App = () => {
//   const [buttonName, setButtonName] = useState("posts")

// 1. The component renders for the first time.
// 1.2 The useEffect() callback is executed.
// 1.3 Click on the buttons to show that with every state change, the component renders again.
// 1.4 Explain that the useEffect() hook happens every time the component renders.
// useEffect(()=>{
//   console.log("useEffect - Rendered - No Dependencies Array");
// })

// 2. Add a dependency array to the useEffect() hook.
// 2.1 useEffect() hook happens only when state changes and that changes dependencies.
// 2.2 Click on the buttons to show that with every state change, the component renders again.
// 2.3 Click on the same button twice to show that the useEffect() hook doesn't happen when there are no changes
// useEffect(()=>{
//   console.log("useEffect - Rendered - With Parameter inside Dependency Array");
// }, [buttonName])




//   return (
//     <>
//       <div>
//         <button onClick={() => setButtonName("posts")}>Posts</button>
//         <button onClick={() => setButtonName("Users")}>Users</button>
//         <button onClick={() => setButtonName("Comments")}>Comments</button>
//       </div>
//       <h1>{buttonName}</h1>
//     </>
//   );
// };

// export default App;

function GreetBad({ name }) {
  const message = `Hello, ${name}!`; // Calculates output
  // Bad!
  document.title = `Greetings to ${name}`; // Side-effect!
  return <div>{message}</div>; // Calculates output
}

function GreetGood({ name }) {
  console.log("GreetGood - Rendered");
  const [greetName, setGreetName] = useState("");
  const message = `Hello, ${greetName}!`; // Calculates output

  const handleName = () => {
    setGreetName(name);
  };
  useEffect(() => {
    document.title = `Greetings to ${name}`; // Side-effect!
  });
  return <div>{message}</div>; // Calculates output

  //   callback is the function containing the side-effect logic.
  // callback is executed right after changes were being pushed to DOM.
  //   dependencies is an optional array of dependencies.
  // useEffect() executes callback only if the dependencies have changed between renderings.

  //  Put your side-effect logic into the callback function,
  //  then use the dependencies argument to control when you want the side-effect to run.
  //  That's the sole purpose of useEffect().
}

function GreetInfiniteLoop({ name }) {
  console.log("GreetGood - Rendered");
  const [greetName, setGreetName] = useState("");
  const message = `Hello, ${greetName}!`; // Calculates output
  useEffect(() => {
    document.title = `Greetings to ${name}`; // Side-effect!
    setGreetName(name);
  });
  return <div>{message}</div>;
}

// A) After initial rendering, useEffect() invokes the callback having the side-effect. cleanup function is not invoked.

// B) On later renderings, before invoking the next side-effect callback,
//    useEffect() invokes the cleanup function from the previous side-effect execution
//    (to clean up everything after the previous side-effect), then runs the current side-effect.

// C) Finally, after unmounting the component, useEffect() invokes the cleanup function from the latest side-effect.

function RepeatMessageNoCleanup({ message }) {
  useEffect(() => {
    setInterval(() => {
      console.log(message);
    }, 2000);
  }, []);
  return <div>I'm logging to console "{message}"</div>;
}

function RepeatMessageWithCleanup({ message }) {
  useEffect(() => {
    const id = setInterval(() => {
      console.log(message);
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, [message]);

  return <div className="message">I'm logging to console "{message}"</div>;
}

export default function App() {
  const [message, setMessage] = useState("Hello, World!");

  return (
    <div className="App">
      <h3>Type the message to log to console</h3>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <RepeatMessageNoCleanup message={message} />
    </div>
  );
}

import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  // useState is needed in order to display the result on the screen
  const [bio, setBio] = useState({});

  // 'async' shouldn't be used in the useEffect callback function because these callbacks are synchronous to prevent race conditions. We need to put the async function inside.
  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch('https://swapi.dev/api/people/1/');
          const data = await response.json();
          console.log(data);
          setBio(data);
      };
      fetchData();
  }, []);
  // Empty dependencies array will make useEffect to run only once at startup because that array never changes

  return (
      <>
          <hr />
          <h2>useEffect use case</h2>
          <h3>Running once on mount: fetch API data</h3>
          <p>Luke Skywalker's bio:</p>
          <pre>{JSON.stringify(bio, null, '\t')}</pre>
      </>
  );
}
