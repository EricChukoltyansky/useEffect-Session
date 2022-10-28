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

// ************************************************************************************************ //

//! Pure function Component

// import { useState, useEffect } from "/useState.js";

// const App = () => {
//   const [resourceType, setResourceType] = useState("posts");

//   return (
//     <>
//       <div>
//         <button onClick={() => setResourceType("posts")}>Posts</button>
//         <button onClick={() => setResourceType("Users")}>Users</button>
//         <button onClick={() => setResourceType("Comments")}>Comments</button>
//       </div>
//       <h1>{resourceType}</h1>
//     </>
//   );
// };

// export default App;

// ************************************************************************************************ //

//! 1.3 Click on the buttons to show that with every state change, the component renders again.
//! 1.4 Explain that the useEffect() hook happens every time the component renders.

// useEffect(()=>{
//   console.log("useEffect - Rendered - No Dependencies Array");
// })

// ************************************************************************************************ //

//! 2.2 Click on the buttons to show that with every state change, the component renders again.
//! 2.3 Click on the same button twice to show that the useEffect() hook doesn't happen when there are no changes

// useEffect(()=>{
//   console.log("useEffect - Rendereded - No Dependencies Array");
// })
// useEffect(()=>{
//   console.log("useEffect - Rendered - With Parameter inside Dependency Array");
// }, [resourceType])

// ************************************************************************************************ //

// 3.2 Let's say we want to fetch data from an API.
// 3.3 We can use useEffect() to fetch data from an API.
//! 3.4 Show how the data is not fetched twice when the component renders twice.
 //! Because resourceType does not change between renders.

// useEffect(()=> {
// fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
// .then(response => response.json())
// .then(json => console.log(json))
// }, [resourceType])

// 4.1 Let's put the info from the API into a state.
// 4.2 Show how the data is not fetched twice when the component renders twice.
//  Because resourceType does not change between renders.

// import { useState, useEffect } from "/useState.js";

// const App = () => {
//   const [resourceType, setResourceType] = useState("posts");
//   const [items, setItems] = useState([]);

// useEffect(()=> {
// fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
// .then(response => response.json())
// .then(json => setItems(json))
// }, [resourceType])

//   return (
//     <>
//       <div>
//         <button onClick={() => setResourceType("posts")}>Posts</button>
//         <button onClick={() => setResourceType("Users")}>Users</button>
//         <button onClick={() => setResourceType("Comments")}>Comments</button>
//       </div>
//       <h1>{resourceType}</h1>
//       {items.map(item => {
//         return <pre>{JSON.stringify(item)}</pre>
//        })}
//     </>
//   );
// };

// export default App;

// 5.1 This was a basic use of useEffect() hook.
//  We can see how useEffect() helps us when dealing directly with the DOM by window size change.

// 6.1 Let's see how useEffect() can be used to with window size for example.
// 6.2 Show how the window size changes when the component renders and when it cleans up.

//***!  First show it Static without useEffect() hook and then show it with useEffect() hook. !***/

// import { useState, useEffect } from "react";

// const App = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWindow);

//   const handleResize = () => {
//     setWindowWidth(window.innerWidth)
//   }

//    useEffect(() => {
//     handleResize()

// return () => {
//    window.removeEventListener("resize", handleResize)
//  }
//    },[]);

//   return (
//     <>
//       <div>{windowWidth}</div>
//     </>
//   );
// };

// export default App;

// import { useState, useEffect } from "/useState.js";

// const App = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   const handleResize = () => {
//     setWindowWidth(window.innerWidth);
// }

// useEffect(()=> {
// window.addEventListener("resize", handleResize);

// return () => {
// window.removeEventListener("resize", handleResize);
// }
// }, [])

//   return (
//     <>
//       <div>
//         {windowWidth}
//       </div>
//
//     </>
//   );
// };

// export default App;

// 7.1 Explain about the importance of useEffect() clean up function with return.
//**!!!REMEMBER TO SPLIT EVERYTHINg INTO DIFFERENT COMOPNENTS AND REFRESH AFTER THE USEEFFECT!!! **/

// import { useState, useEffect } from "/useState.js";

// function MouseHook() {
//   const [x, setX] = useState(0);
//   const [y, setY] = useState(0);

//   const logMousePosition = e => {
//     console.log("Mouse event");
//     setX(e.clientX);
//     setY(e.clientY);
// };

// useEffect(() => {
//   console.log("useEffect called");
//   window.addEventListener("mousemove", logMousePosition);

// }, []);

//   return (
//     <div>
//       Hooks X - {x} Y - {y}
//     </div>
//   );
// }

// function MouseContainer() {
//   const [display, setDisplay] = useState(true);
// return (
//   <div>
//     <button onClick={() => setDisplay(!display)}>Toggle Display</button>
//     {display && <HookMouse />}
//   </div>
// )
// }

// const App = () => {
//   return (
//     <>
//       <div>
//         <MouseContainer />
//       </div>
//
//     </>
//   );
// };

// To prevent memory leaks, we need to clean up the event listeners.

//!Warning: Can't perform a React state update on an unmounted component.
//! This is a no-op, but it indicates a memory leak in your application. ***/
//! To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function. ***/

//   return () => {
//     console.log("Component unmounting code");
//     window.removeEventListener("mousemove", logMousePosition);
// }

//** 1. The infinite loop and side-effect updating state **//

// import { useEffect, useState } from "react";

// const App = () => {
//   const [value, setValue] = useState('');
//   const [count, setCount] = useState(-1);

// useEffect(() => setCount(count => count + 1));

//   const onChange = ({ target }) => setValue(target.value);
//   return (
//     <div>
//       <input type="text" value={value} onChange={onChange} />
//       <div>Number of changes: {count}</div>
//     </div>
//   )
// };

// export default App;

// The problem is that the useEffect() hook is called every time the component renders.
//  This is because the component renders every time the state changes.
//** The problem is with this line of code: setCount(count => count + 1) **//

// ** 1.1 Fixing Dependencies **//

// Add the second argument to useEffect() hook. This is an array of dependencies.
// useEffect(() => setCount(count + 1), [value]);

//** 1.2 Using a reference **//

// import { useState, useRef } from 'react';
// function CountInputChanges() {
//   const [value, setValue] = useState('');
//   const countRef = useRef(0);
//   const onChange = ({ target }) => {
//     setValue(target.value);
//     countRef.current++;
//   };
//   return (
//     <div>
//       <input type="text" value={value} onChange={onChange} />
//       <div>Number of changes: {countRef.current}</div>
//     </div>
//   );
// }

//** 2. The infinite loop and new objects references **//

// import { useEffect, useState } from "react";
// function CountSecrets() {
//   const [secret, setSecret] = useState({ value: "", countSecrets: 0 });
//   useEffect(() => {
//     if (secret.value === 'secret') {
//       setSecret(s => ({...s, countSecrets: s.countSecrets + 1}));
//     }
//   }, [secret]);
//   const onChange = ({ target }) => {
//     setSecret(s => ({ ...s, value: target.value }));
//   };
//   return (
//     <div>
//       <input type="text" value={secret.value} onChange={onChange} />
//       <div>Number of secrets: {secret.countSecrets}</div>
//     </div>
//   );
// }

// When the word "secret" is typed in the input, the useEffect() hook is called.
// setSecret(s => ({...s, countSecrets: s.countSecrets + 1}));
//!2 objects in JavaScript are equal only if they reference exactly the same object.

//** 2.1 Avoid objects as dependencies **//

// useEffect(() => {
//   if (secret.value === 'secret') {
//     setSecret(s => ({...s, countSecrets: s.countSecrets + 1}));
//   }
// }, [secret.value]);

//!USE ONLY IN EXTREME CASES

// function GreetBad({ name }) {
//   const message = `Hello, ${name}!`; // Calculates output
//   // Bad!
//   document.title = `Greetings to ${name}`; // Side-effect!
//   return <div>{message}</div>; // Calculates output
// }

// function GreetGood({ name }) {
//   console.log("GreetGood - Rendered");
//   const [greetName, setGreetName] = useState("");
//   const message = `Hello, ${greetName}!`; // Calculates output

//   const handleName = () => {
//     setGreetName(name);
//   };
//   useEffect(() => {
//     document.title = `Greetings to ${name}`; // Side-effect!
//   });
//   return <div>{message}</div>; // Calculates output

//   //   callback is the function containing the side-effect logic.
//   // callback is executed right after changes were being pushed to DOM.
//   //   dependencies is an optional array of dependencies.
//   // useEffect() executes callback only if the dependencies have changed between renderings.

//   //  Put your side-effect logic into the callback function,
//   //  then use the dependencies argument to control when you want the side-effect to run.
//   //  That's the sole purpose of useEffect().
// }

// function GreetInfiniteLoop({ name }) {
//   console.log("GreetGood - Rendered");
//   const [greetName, setGreetName] = useState("");
//   const message = `Hello, ${greetName}!`; // Calculates output
//   useEffect(() => {
//     document.title = `Greetings to ${name}`; // Side-effect!
//     setGreetName(name);
//   });
//   return <div>{message}</div>;
// }

// // A) After initial rendering, useEffect() invokes the callback having the side-effect. cleanup function is not invoked.

// // B) On later renderings, before invoking the next side-effect callback,
// //    useEffect() invokes the cleanup function from the previous side-effect execution
// //    (to clean up everything after the previous side-effect), then runs the current side-effect.

// // C) Finally, after unmounting the component, useEffect() invokes the cleanup function from the latest side-effect.

// function RepeatMessageNoCleanup({ message }) {
//   useEffect(() => {
//     setInterval(() => {
//       console.log(message);
//     }, 2000);
//   }, []);
//   return <div>I'm logging to console "{message}"</div>;
// }

// function RepeatMessageWithCleanup({ message }) {
//   useEffect(() => {
//     const id = setInterval(() => {
//       console.log(message);
//     }, 2000);
//     return () => {
//       clearInterval(id);
//     };
//   }, [message]);

//   return <div className="message">I'm logging to console "{message}"</div>;
// }

// export default function App() {
//   const [message, setMessage] = useState("Hello, World!");

//   return (
//     <div className="App">
//       <h3>Type the message to log to console</h3>
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <RepeatMessageNoCleanup message={message} />
//     </div>
//   );
// }

// import "./styles.css";
// import { useState, useEffect } from "react";

// export default function App() {
//   // useState is needed in order to display the result on the screen
//   const [bio, setBio] = useState({});

//   // 'async' shouldn't be used in the useEffect callback function because these callbacks are synchronous to prevent race conditions. We need to put the async function inside.
//   useEffect(() => {
//       const fetchData = async () => {
//           const response = await fetch('https://swapi.dev/api/people/1/');
//           const data = await response.json();
//           console.log(data);
//           setBio(data);
//       };
//       fetchData();
//   }, []);
//   // Empty dependencies array will make useEffect to run only once at startup because that array never changes

//   return (
//       <>
//           <hr />
//           <h2>useEffect use case</h2>
//           <h3>Running once on mount: fetch API data</h3>
//           <p>Luke Skywalker's bio:</p>
//           <pre>{JSON.stringify(bio, null, '\t')}</pre>
//       </>
//   );
// }
