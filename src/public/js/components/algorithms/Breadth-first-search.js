import Queue from "../dataStructure/Queue";

// Breadth first search

function Breadth_first_search(
  grid,
  start,
  finish,
  numberOfNodes,
  rows,
  columns
) {
  let conqueredNode = [];
  let closedList = {};
  let cellDetails = Object.assign([], grid);
  closedList[start] = 0;
  const queue = new Queue();
  queue.enqueue(start);

  while (!queue.isEmpty()) {
    let v = queue.dequeue();
    conqueredNode.push(v);
    for (let i of cellDetails[v].adjent) {
      if (cellDetails[i].isBlocked === false) {
        if (!closedList[i]) {
          closedList[i] = v;
          queue.enqueue(i);
          if (i === finish) {
            let path = tracePath(closedList, start, finish);

            return { path: path, conqueredNode: conqueredNode };
          }
        }
      }
    }
  }

  return { path: [], conqueredNode: conqueredNode };
}

function tracePath(closedList, start, finish) {
  let path = [];
  let i = finish;
  while (i !== start) {
    console.log("!");

    path.push(closedList[i]);
    i = closedList[i];
  }
  return path;
}

export default Breadth_first_search;
