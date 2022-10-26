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

//*** Initializing useState Wrongly ***//

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