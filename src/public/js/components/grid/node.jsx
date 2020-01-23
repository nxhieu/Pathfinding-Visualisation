import React, { useState, useEffect } from "react";

import "../../../css/node.css";

const node = React.forwardRef(
  ({ node, handleMouseDown, handleMouseUp, handleMouseEnter, index }, ref) => {
    const [isStart, setStart] = useState(node.start);
    const [isFinish, setFinish] = useState(node.finish);
    const [isBlocked, setBlock] = useState(node.isBlocked);
    useEffect(() => {
      setStart(node.start);
      setBlock(node.isBlocked);
      setFinish(node.finish);
    }, [node.start, node.finish, node.isBlocked]);

    return (
      <div
        ref={ref}
        className={`node-${startOrFinish(isStart, isFinish, isBlocked)}`}
        onMouseDown={() => {
          handleMouseDown(index);
        }}
        onMouseUp={() => {
          handleMouseUp(index);
        }}
        onMouseEnter={() => {
          handleMouseEnter(index);
        }}
      ></div>
    );
  }
);

function startOrFinish(isStart, isFinish, isBlocked) {
  if (isStart) {
    return "start";
  } else if (isFinish) {
    return "finish";
  } else if (isBlocked) {
    return "blocked";
  } else {
    return "normal";
  }
}

export default node;
