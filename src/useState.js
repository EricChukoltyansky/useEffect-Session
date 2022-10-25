import React, { useState } from "react";

// A stateless functional component doesn't have a state. Here's an example:

function Bulbs() {
  return <div className="bulb-off" />;
}

// What about adding a button to switch on/off the bulb?
// To do so, you need a functional component with state, aka stateful functional component.

// useState() is the right hook to implement the bulb switch state.
// Adding state to a functional component requires 4 steps: enabling the state, initializing, reading and updating.

// 1.1 Enabling state

 // function Bulbs() {
 //     ... = useState(...);
 //     return <div className="bulb-off" />;
 //   }

 // useState() is called at the first line of Bulbs function (don't think about hook's parameters and returned value for now).
 // It's important that calling the hook inside the component makes it a stateful functional component

// 1.2 Initializing state

// function Bulbs() {
//     ... = useState(false);
//     return <div className="bulb-off" />;
// }

