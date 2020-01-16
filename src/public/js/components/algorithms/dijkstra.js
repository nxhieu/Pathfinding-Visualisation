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
      Visited_node,
      grid
    );

    if (index === finish) {
      let shortestPath = [];

      findShortestPath(shortestPath, prev, start, finish);
      return { path: shortestPath, conqueredNode: conquered };
    }
    if (index) {
      conquerNode(
        grid,
        GreedyScore_node,
        Visited_node,
        index,
        minScore,
        prev,
        conquered
      );
    }

    // console.log(index);

    k++;
  }

  return { path: [], conqueredNode: conquered };
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

function comparingGreedyScore(GreedyScore_node, Visited_node, grid) {
  let minScore = Number.MAX_SAFE_INTEGER;
  let index;
  for (let j in GreedyScore_node) {
    if (
      GreedyScore_node[j] &&
      GreedyScore_node[j] < minScore &&
      typeof Visited_node[j] === "undefined" &&
      !grid[j].isBlocked
    ) {
      minScore = GreedyScore_node[j];
      index = j;
    }
  }
  return { index: parseInt(index), minScore: minScore };
}

function findShortestPath(shortestPath, prev, start, finish) {
  if (typeof finish !== "undefined") {
    findShortestPath(shortestPath, prev, start, prev[finish]);
    shortestPath.push(finish);
  }
}

export default Dijkstra;
