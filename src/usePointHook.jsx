import React from "react";

const usePoint = (initialState) => {
  const [point, setPoint] = React.useState(initialState);

  const MoveLeft = () => {
    setPoint((prev) => ({ ...prev, x: prev.x - 1 }));
  };

  const MoveRight = () => {
    setPoint((prev) => ({ ...prev, x: prev.x + 1 }));
  };

  const MoveUp = () => {
    setPoint((prev) => ({ ...prev, y: prev.y - 1 }));
  };

  const MoveDown = () => {
    setPoint((prev) => ({ ...prev, y: prev.y + 1 }));
  };

  return { point, MoveLeft, MoveRight, MoveUp, MoveDown };
};

export default usePoint;
