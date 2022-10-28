// A stateless functional component doesn't have a state. Here's an example:

//!  Hooks can only operate within a functional component
//!  Press the buttons to show that nothing works, because the component is stateless
//!  Explain how states can help us to solve this problem

// import React, { useState } from "react";

// const App = () => {
//     return (
//         <>
//             <div style={{ textAlign: "center" }}>
//           <button>-</button>
//           <button>0</button>
//           <button>+</button>
//             </div>
//      </>
//     )
// }

// export default App;

// ************************************************************************************************ //

//! useState has to operated in the same order every time the component renders;
//! it can't be called conditionally or inside loops, etc.
//! useState can be called multiple times in a single component
//! Show The Error In The Console!
// if (true) {
//     useState(0);
// }
// useState(0);
// useState(0);
// useState(0);

// ************************************************************************************************ //

//! useState returns an array with two elements,
//! the first is the state value, the second is a function to update the state
//  SHOW THIS FIRST const arr = useState(4);

//  SHOW THIS SECOND const [count,setCount] = useState(4);

//     return (
//         <>
//  <div style={{textAlign: "center"}}>
//     <button>-</button>
//     <button>0</button>
//     <button>+</button>
// SHOW THIS FIRST    <h1>{arr[0]}</h1>

// SHOW THIS SECOND    <h1>{count}</h1>
//   </div>
//      </>
//     )
// }

// ************************************************************************************************ //

//! Build Decrement and Increment Functions To Demonstarte The Use Of setCount
//! Explain That setCount(count-1) and setCount(count + 1) Is The Wrong Way To Do It

// const decrement = () => {
//     setCount(count - 1);
// }

// ************************************************************************************************ //

//! 1.1 Explain That It might Be Working But It's Not The Right Way To Do It
//! 1.2 Because it's not using the previous state, And Overwriting It
// const decrement = () => {
//     setCount((prevCount) => prevCount - 1);
// }

// const increment = () => {
//     setCount((prevCount) => prevCount + 1);
// }

// ************************************************************************************************ //

//! Explain That We Can Use useState To Store Any Type Of Data
//! Explain That We Can Initialize useState With A Function
//! The Function Will Only Run Once, When The Component Renders For The First Time;

// import React, { useState } from "react";
// const App = () => {
// const [count,setCount] = useState(() => {
//     console.log("useState function");
//     return 4;
// }));

// ************************************************************************************************ //

//! But If We Use An External Function, It Will Run Every Time The Component Renders
//! Initialize useState With An countInitial Function And Press The Buttons To See The Difference
//! When countInitial Is A Function, It Will Run Every Time The Component Renders

// function countInitial() {
//     console.log("countInitial function");
//     return 4;
// }

// const [count,setCount] = useState(countInitial());

// ************************************************************************************************ //

// import React, { useState } from "react";

// const App = () => {
// const [stateObj, setStateObj] = useState({count: 4, theme: "blue"});
// const [stateArr, setStateArr] = useState([ 4, "blue" ]);

//    function decrement() {

//!     BAD
//  setStateObj({count: stateObj.count - 1})

//!     GOOD
//  setStateObj(prevState => {
//            return {...prevState, count: prevState.count - 1}
//       })

//!     BAD
//  setStateArr([stateArr[0] - 1, stateArr[1]])

//!     GOOD
//        setStateArr(prevState => {
//            return [...prevState, prevState[0] - 1]
// })
// }

// Toggle a boolean
// const [toggled, setToggled] = useState(false);
// setToggled(toggled => !toggled);

//   function increment() {
//     setStateObj(prevState => {
//            return {...prevState, count: prevState.count + 1}
//       })
//       setStateArr(prevState => {
//            return [...prevState, prevState[0] + 1]
// })
//   }

// function addToArray() {
//     setStateArr(prevState => {
//         return [...prevState, "new item"]
// })
// }

// function removeFromArray() {
//     setStateArr(prevState => {
//         return prevState.filter((item) => item !== "new item")
// })
// }

//     return (
//         <>
//             <div style={{ textAlign: "center" }}>
//           <button>-</button>
//           <button>0</button>
//           <button>+</button>
//          <h1>{stateObj.count}</h1>
//          <h1>{stateObj.theme}</h1>
//           h1>{stateArr[0]}</h1>
//          <h1>{stateArr[1]}</h1>

//             </div>
//      </>
//     )
// }

// export default App;

// ************************************************************************************************ //

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
