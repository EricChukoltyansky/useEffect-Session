// import React, { useState } from "react";

// A stateless functional component doesn't have a state. Here's an example:

// function Bulbs() {
//   return <div className="bulb-off" />;
// }

// What about adding a button to switch on/off the bulb?
// To do so, you need a functional component with state, aka stateful functional component.

// useState() is the right hook to implement the bulb switch state.
// Adding state to a functional component requires 4 steps: enabling the state, initializing, reading and updating.

//*** 1.1 Enabling state ***//

// function Bulbs() {
//     ... = useState(...);
//     return <div className="bulb-off" />;
//   }

// useState() is called at the first line of Bulbs function
// It's important that calling the hook inside the component makes it a stateful functional component

//*** 1.2 Initializing state ***//

// function Bulbs() {
//     ... = useState(false);
//     return <div className="bulb-off" />;
// }

//*** 1.3 Reading state ***//

// When the hook useState(initialState) is invoked, it returns an array.
//  The first item of this array is the state value:
// const stateArray = useState(false);
// stateArray[0]; // => the state value

// useState(false) returns an array. The first item contains the state value, which currently is false (because the state's been initialized with false).
// Let's use array destructuring to extract the state value into a variable on:

// function Bulbs() {
//   const [on] = useState(false);
//   return <div className={on ? 'bulb-on' : 'bulb-off'} />;
// }

//*** 1.4 Updating state ***//

// The second item of the array returned by useState(initialState) is a function that updates the state value.

// const [state, setState] = useState(initialState);
//  changes state to `newState` and triggers re-rendering
// setState(newState);
//  after re-render `state` has the value of `newState`

// import React, { useState } from 'react';
// function Bulbs() {
//   const [on, setOn] = useState(false);
//   const lightOn = () => setOn(true);
//   const lightOff = () => setOn(false);
//   return (
//     <>
//       <div className={on ? 'bulb-on' : 'bulb-off'} />
//       <button onClick={lightOn}>On</button>
//       <button onClick={lightOff}>Off</button>
//     </>
//   );
// }

// .bulb-on {
//   height: 25px;
//   width: 25px;
//   background-color: rgb(233, 250, 0);
//   border-radius: 50%;
//   display: inline-block;
// }

// .bulb-off {
//   height: 25px;
//   width: 25px;
//   background-color: #bbb;
//   border-radius: 50%;
//   display: inline-block;
// }

// As soon as the state changes, React re-renders the component. on variable gets the new state value.

//*** Updating the state with a callback function ***//

// When the new state is calculated using the previous state, you can update the state with a callback:

// Toggle a boolean
// const [toggled, setToggled] = useState(false);
// setToggled(toggled => !toggled);

// Increase a counter
// const [count, setCount] = useState(0);
// setCount(count => count + 1);

// Add an item to array
// const [items, setItems] = useState([]);
// setItems(items => [...items, 'New Item']);

// Let's implement the bulb component to switch on/off with a single button:

// function Bulbs() {
//   const [on, setOn] = useState(false);
//   const lightSwitch = () => setOn(on => !on);
//   return (
//     <>
//       <div className={on ? 'bulb-on' : 'bulb-off'} />
//       <button onClick={lightSwitch}>On/off</button>
//     </>
//   );
// }

//*** Multiple States ***/

// function Bulbs() {
//   const [on, setOn] = useState(false);
//   const [count, setCount] = useState(1);
//   const lightSwitch = () => setOn(on => !on);
//   const addBulbs = () => setCount(count => count + 1);
//   const bulb = <div className={on ? 'bulb-on' : 'bulb-off'} />;
//   const bulbs = Array(count).fill(bulb);
//   return (
//     <>
//       <div className="bulbs">{bulbs}</div>
//       <button onClick={lightSwitch}>On/off</button>
//       <button onClick={addBulbs}>Add bulb</button>
//     </>
//   );
// }

// .bulb-on {
//   height: 25px;
//   width: 25px;
//   background-color: rgb(233, 250, 0);
//   border-radius: 50%;
//   display: inline-block;
// }

// .bulb-off {
//   height: 25px;
//   width: 25px;
//   background-color: #bbb;
//   border-radius: 50%;
//   display: inline-block;
// }

//*** 3. Lazy initialization of state ***//

// Every time React re-renders the component, useState(initialState) is executed.
//  If the initial state is a primitive value (number, boolean, etc) there are no performance issues.

// When the initial state requires expensive performance-wise operation,
// use the lazy initialization of state by supplying a function as an argument to useState(computeInitialState).

// function MyComponent({ bigJsonData }) {
//   const [value, setValue] = useState(function getInitialState() {
//     const object = JSON.parse(bigJsonData); // expensive operation
//     return object.initialValue;
//   });
//   ...
// }

//*** 4. Pitfalls ***//

// Only Call Hooks at the Top Level: you cannot call useState() in loops, conditions, nested functions, etc.
//  On multiple useState() calls, the invocation order must be the same between renderings.

//*** 4.2 Stale State ***//

// function App() {
//   const [count, setCount] = useState(0);

// Directly update state
//   const increase = () => setCount(count + 1);

// Render UI
//   return (
//     <div className='App'>
//       <span>Count: {count}</span>
//       <button onClick={increase}>Add +1</button>
//     </div>
//   );
// }

// export default App;

// Because contrary to what you may think, React doesn't update the state immediately when the button is clicked, as shown in the example demo.
// Instead, React takes a snapshot of the current state and schedules this Update (+1) to be made later for performance gains - this happens in milliseconds,
// so it is not noticeable to the human eyes. However, while the scheduled Update is still in pending transition,
// the current state may be changed by something else (such as multiple users' cases).
// The scheduled Update would have no way of knowing about this new event because it only
// has a record of the state snapshot it took when the button got clicked.

// This could result in major bugs and weird behavior in your application.
//  Let’s see this in action by adding another button that asynchronously updates the count state after a 2 seconds delay.

// function App() {
//   const [count, setCount] = useState(0);

// Directly update state
//   const update = () => setCount(count + 1);

// Directly update state after 2 sec
//   const asyncUpdate = () => {
//     setTimeout(() => {
//       setCount(count + 1);
//     }, 2000);
//   };

// Render UI
//   return (
//     <div className='App'>
//       <span>Count: {count}</span>
//       <button onClick={update}>Add +1</button>
//       <button onClick={asyncUpdate}>Add +1 later</button>
//     </div>
//   );
// }

// This unintentional bug often plagues applications whose states are directly updated using just the setState(newValue) function.
//  The suggested way of updating useState is by functional update which to pass setState() a callback function and in this callback
//  function we pass the current state at that instance e.g.,
//   setState(currentState => currentState + newValue). This passes the current state at the scheduled update time to the callback function,
//    making it possible to know the current state before attempting an update.

import { useState } from "react";

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

//*** 4.3 State vs reference ***//

// Consider a scenario when you'd like to count how many times a component renders.
// A naive implemenation would be to initialize countRender state, and update it on each render (with the help of useEffect() hook):

// function CountMyRenders() {
//   const [countRender, setCountRender] = useState(0);

//   useEffect(function afterRender() {
//     setCountRender(countRender => countRender + 1);
//   });
//   return (
//     <div>I've rendered {countRender} times</div>
//   );
// }

// useEffect() calls afterRender() callback after every render. But as soon as countRender state updates, the component re-renders.
//  This triggers another state update, and another re-render, and so on indefinitely.
// Mutable reference useRef() holds mutable data that, when changed, doesn't trigger re-rendering.
// Let's fix <CountMyRenders> to use a mutable reference:

// function CountMyRenders() {
//   const countRenderRef = useRef(1);

//   useEffect(function afterRender() {
//     countRenderRef.current++;
//   });
//   return (
//     <div>I've rendered {countRenderRef.current} times</div>
//   );
// }

//*** 4.4 Initializing useState Wrongly ***//

// For example, we have a component expecting a user object state containing the user's name,
//  image, and bio - and in this component, we are rendering the user's properties.

// Initializing useState with a different data type, such as an empty state or a null value, would result in a blank page error, as shown below.

// function App() {
// Initializing state
//   const [user, setUser] = useState();

// Render UI
//   return (
//     <div className='App'>
//       <img src={user.image} alt='profile image' />
//       <p>User: {user.name}</p>
//       <p>About: {user.bio}</p>
//     </div>
//   );
// }

// export default App;

// The preferred way to initialize useState is to pass it the expected data type to avoid potential blank page errors.
//  For example, an empty object, as shown below, could be passed to the state:

// function App() {
// Initializing state with expected data type
//   const [user, setUser] = useState({});

// Render UI
//   return (
//     <div className='App'>
//       <img src={user.image} alt='profile image' />
//       <p>User: {user.name}</p>
//       <p>About: {user.bio}</p>
//     </div>
//   );
// }

// export default App;

// We could take this a notch further by defining the user object's expected properties when initializing the state.

// function App() {
// Initializing state with expected data type
//   const [user, setUser] = useState({
//     image: "",
//     name: "",
//     bio: "",
//   });

// Render UI
//   return (
//     <div className='App'>
//       <img src={user.image} alt='profile image' />
//       <p>User: {user.name}</p>
//       <p>About: {user.bio}</p>
//     </div>
//   );
// }

// export default App;

//*** 4.5 Not Using Optional Chaining ***/

// You typically try to access this object by chaining through related objects using the dot (.) chaining operator, e.g., user.names.firstName.
//  However, we have a problem if any chained objects or properties are missing.
//  The page will break, and the user will get a blank page error.

// function App() {
// Initializing state with expected data type
// const [user, setUser] = useState({});

// Render UI
//   return (
//     <div className='App'>
//       <img src={user.image} alt='profile image' />
//       <p>User: {user?.names?.firstName}</p>
//       <p>About: {user.bio}</p>
//     </div>
//   );
// }

// export default App;
