import { useState } from "react";
import MouseHook from "./MouseHook";

export default function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <MouseHook />}
    </div>
  );
}
