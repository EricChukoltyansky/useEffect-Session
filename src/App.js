import { useState, useEffect } from "react";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWindow);

  // const handleResize = () => {
  //   setWindowWidth(window.innerWidth);
  // };

  return (
    <>
      <div>{windowWidth}</div>
    </>
  );
};
export default App;
