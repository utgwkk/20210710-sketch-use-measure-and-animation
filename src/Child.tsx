import React from "react";
import { useEffect } from "react";
import useMeasure from "react-use-measure";

interface ChildProps {
  animationCompleted: boolean;
}

export const Child: React.VFC<ChildProps> = ({ animationCompleted }) => {
  const [ref, { width }, recalculate] = useMeasure();

  useEffect(() => {
    if (animationCompleted) {
      recalculate();
    }
  }, [animationCompleted, recalculate]);

  return (
    <div ref={ref}>
      <h2>child</h2>
      width: {width}
    </div>
  );
};
