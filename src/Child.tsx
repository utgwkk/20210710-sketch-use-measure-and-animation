import React from "react";
import useMeasure from "react-use-measure";

export const Child: React.VFC = () => {
  const [ref, { width }] = useMeasure();

  return (
    <div ref={ref}>
      <h2>child</h2>
      width: {width}
    </div>
  );
};
