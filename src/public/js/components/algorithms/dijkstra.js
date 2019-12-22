function Dijkstra(grid, start, finish, numberOfNodes) {
  let GreedyScore_node = [];
  let Visited_node = {};
  let prev = {};
  let conquered = [];
  conquerNode(grid, GreedyScore_node, Visited_node, start, 1, prev, conquered);
  let k = 1;
  while (k < numberOfNodes - 1) {
    let { index, minScore } = comparingGreedyScore(
      GreedyScore_node,
      Visited_node
    );

    if (index === finish) {
      // console.log("con", index, "finish", finish);
      // console.log(typeof index);
      // console.log(Visited_node);
      let shortestPath = [];

      findShortestPath(shortestPath, prev, start, finish);
      return { path: shortestPath, conqueredNode: conquered };
      // return Visited_node;
    }

    conquerNode(
      grid,
      GreedyScore_node,
      Visited_node,
      index,
      minScore,
      prev,
      conquered
    );
    // console.log(index);

    k++;
  }
}

function conquerNode(
  grid,
  GreedyScore_node,
  Visited_node,
  index,
  minScore,
  prev,
  conquered
) {
  GreedyScore_node[index] = minScore;
  Visited_node[index] = true;
  conquered.push(index);
  // console.log(index);
  for (let adjentVertex of grid[index].adjent) {
    if (
      !GreedyScore_node[adjentVertex] &&
      typeof Visited_node[adjentVertex] === "undefined"
    ) {
      prev[adjentVertex] = parseInt(index);
      GreedyScore_node[adjentVertex] = GreedyScore_node[index] + 1;
    }

    if (
      GreedyScore_node[adjentVertex] > GreedyScore_node[index] + 1 &&
      typeof Visited_node[adjentVertex] === "undefined"
    ) {
      prev[adjentVertex] = parseInt(index);
      GreedyScore_node[adjentVertex] = GreedyScore_node[index] + 1;
    }
  }
}

function comparingGreedyScore(GreedyScore_node, Visited_node) {
  let minScore = Number.MAX_SAFE_INTEGER;
  let index;
  for (let j in GreedyScore_node) {
    if (
      GreedyScore_node[j] &&
      GreedyScore_node[j] < minScore &&
      typeof Visited_node[j] === "undefined"
    ) {
      minScore = GreedyScore_node[j];
      index = j;
    }
  }
  return { index: parseInt(index), minScore: minScore };
}

function findShortestPath(shortestPath, prev, start, finish) {
  // if (typeof finish === "undefined") {
  //   console.log(shortestPath);
  //   return shortestPath;
  // }
  if (typeof finish !== "undefined") {
    findShortestPath(shortestPath, prev, start, prev[finish]);
    shortestPath.push(finish);
    // console.log(shortestPath);
    // console.log(finish);
  }
}

function findConquerNode() {}
export default Dijkstra;
