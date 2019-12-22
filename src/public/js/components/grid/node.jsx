import React, { useState } from "react";
import "../../../css/node.css";

const node = React.forwardRef(({ node }, ref) => {
  const [isStart, setStart] = useState(node.start);
  const [isFinish, setFinish] = useState(node.finish);
  const [isShortest, setShortest] = useState(node.isShortest);

  console.log(isShortest);
  // let state = { isStart: false };
  // if (node.start) {
  //   setState(prevState => ({ isStart: true }));
  // }
  // isStart ? "start" : null
  return (
    <div ref={ref} className={`node-${startOrFinish(isStart, isFinish)}`}></div>
  );
});

function startOrFinish(isStart, isFinish) {
  if (isStart) {
    return "start";
  } else if (isFinish) {
    return "finish";
  } else {
    return "normal";
  }
}

export default node;
