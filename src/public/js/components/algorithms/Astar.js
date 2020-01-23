//A* algorithms using Manhattan distance (approximate heuristics)
// source: GeekForGeek. Implementation was in C++

function A_star_pathfinding(grid, start, finish, numberOfNodes, rows, columns) {
  const openList = {}; //unconquered
  const conqueredList = [];
  const cellDetails = Object.assign([], grid);
  const closedList = []; //conquered

  for (let i = 1; i <= numberOfNodes; i++) {
    cellDetails[i].f = Number.MAX_SAFE_INTEGER;
    cellDetails[i].g = Number.MAX_SAFE_INTEGER;
    cellDetails[i].h = Number.MAX_SAFE_INTEGER;
    cellDetails[i].parent = -1;
  }

  // Initialising the parametter of the starting node
  cellDetails[start].f = 0.0;
  cellDetails[start].g = 0.0;
  cellDetails[start].h = 0.0;
  cellDetails[start].parent = start;
  // Add starting node with  to the open list
  openList[start] = 0.0;

  while (!isEmpty(openList)) {
    //pop the start node off of the openList

    let beginPointer = parseInt(findMinimum(openList));
    delete openList[beginPointer];

    // add this vertex from the closed list
    closedList[beginPointer] = true;

    // generate all (the successors of the cell)

    // To store the 'g' 'h' and 'f' of the successor
    let gNew, hNew, fNew;
    //North
    if (isValid(beginPointer - columns, numberOfNodes)) {
      if (isDestination(beginPointer - columns, finish)) {
        cellDetails[beginPointer - columns].parent = beginPointer;
        return tracePath(cellDetails, finish, conqueredList);
        // if the successor is already on the closed list or if it is blocked
      } else if (
        closedList[beginPointer - columns] !== true &&
        cellDetails[beginPointer - columns].isBlocked === false
      ) {
        gNew = cellDetails[beginPointer].g + 1;
        hNew = calculateHValue(beginPointer - columns, finish, rows, columns);
        fNew = gNew + hNew;

        // If it isn’t on the open list, add it to
        // the open list. Make the current square
        // the parent of this square. Record the
        // f, g, and h costs of the square cell
        //                OR
        // If it is on the open list already, check
        // to see if this path to that square is better,
        // using 'f' cost as the measure.
        if (
          cellDetails[beginPointer - columns].f === Number.MAX_SAFE_INTEGER ||
          cellDetails[beginPointer - columns].f > fNew
        ) {
          conqueredList.push(beginPointer - columns);
          openList[beginPointer - columns] = fNew;
          cellDetails[beginPointer - columns].f = fNew;
          cellDetails[beginPointer - columns].g = gNew;
          cellDetails[beginPointer - columns].h = hNew;
          cellDetails[beginPointer - columns].parent = beginPointer;
        }
      }
    }

    // South
    if (isValid(beginPointer + columns, numberOfNodes)) {
      if (isDestination(beginPointer + columns, finish)) {
        cellDetails[beginPointer + columns].parent = beginPointer;
        return tracePath(cellDetails, finish, conqueredList);

        // if the successor is already on the closed list or if it is blocked
      } else if (
        closedList[beginPointer + columns] !== true &&
        cellDetails[beginPointer + columns].isBlocked === false
      ) {
        gNew = cellDetails[beginPointer].g + 1;
        hNew = calculateHValue(beginPointer + columns, finish, rows, columns);
        fNew = gNew + hNew;

        // If it isn’t on the open list, add it to
        // the open list. Make the current square
        // the parent of this square. Record the
        // f, g, and h costs of the square cell
        //                OR
        // If it is on the open list already, check
        // to see if this path to that square is better,
        // using 'f' cost as the measure.
        if (
          cellDetails[beginPointer + columns].f === Number.MAX_SAFE_INTEGER ||
          cellDetails[beginPointer + columns].f > fNew
        ) {
          conqueredList.push(beginPointer + columns);
          openList[beginPointer + columns] = fNew;
          cellDetails[beginPointer + columns].f = fNew;
          cellDetails[beginPointer + columns].g = gNew;
          cellDetails[beginPointer + columns].h = hNew;
          cellDetails[beginPointer + columns].parent = beginPointer;
        }
      }
    }

    //   East
    if (
      isValid(beginPointer + 1, numberOfNodes) &&
      beginPointer % columns !== 0
    ) {
      if (isDestination(beginPointer + 1, finish)) {
        cellDetails[beginPointer + 1].parent = beginPointer;
        return tracePath(cellDetails, finish, conqueredList);

        // if the successor is already on the closed list or if it is blocked
      } else if (
        closedList[beginPointer + 1] !== true &&
        cellDetails[beginPointer + 1].isBlocked === false
      ) {
        gNew = cellDetails[beginPointer].g + 1;
        hNew = calculateHValue(beginPointer + 1, finish, rows, columns);

        fNew = gNew + hNew;

        // If it isn’t on the open list, add it to
        // the open list. Make the current square
        // the parent of this square. Record the
        // f, g, and h costs of the square cell
        //                OR
        // If it is on the open list already, check
        // to see if this path to that square is better,
        // using 'f' cost as the measure.
        if (
          cellDetails[beginPointer + 1].f === Number.MAX_SAFE_INTEGER ||
          cellDetails[beginPointer + 1].f > fNew
        ) {
          conqueredList.push(beginPointer + 1);
          openList[beginPointer + 1] = fNew;
          cellDetails[beginPointer + 1].f = fNew;
          cellDetails[beginPointer + 1].g = gNew;
          cellDetails[beginPointer + 1].h = hNew;
          cellDetails[beginPointer + 1].parent = beginPointer;
        }
      }
    }

    // west
    if (
      isValid(beginPointer - 1, numberOfNodes) &&
      beginPointer % columns !== 1
    ) {
      if (isDestination(beginPointer - 1, finish)) {
        cellDetails[beginPointer - 1].parent = beginPointer;
        return tracePath(cellDetails, finish, conqueredList);

        // if the successor is already on the closed list or if it is blocked
      } else if (
        closedList[beginPointer - 1] !== true &&
        cellDetails[beginPointer - 1].isBlocked === false
      ) {
        gNew = cellDetails[beginPointer].g + 1;
        hNew = calculateHValue(beginPointer - 1, finish, rows, columns);
        fNew = gNew + hNew;

        // If it isn’t on the open list, add it to
        // the open list. Make the current square
        // the parent of this square. Record the
        // f, g, and h costs of the square cell
        //                OR
        // If it is on the open list already, check
        // to see if this path to that square is better,
        // using 'f' cost as the measure.
        if (
          cellDetails[beginPointer - 1].f === Number.MAX_SAFE_INTEGER ||
          cellDetails[beginPointer - 1].f > fNew
        ) {
          conqueredList.push(beginPointer - 1);
          openList[beginPointer - 1] = fNew;
          cellDetails[beginPointer - 1].f = fNew;
          cellDetails[beginPointer - 1].g = gNew;
          cellDetails[beginPointer - 1].h = hNew;
          cellDetails[beginPointer - 1].parent = beginPointer;
        }
      }
    }

    // console.log("delete");
  }

  return { path: [], conqueredNode: conqueredList };
}
// Calculate function to calculate Manhattan distance
function calculateHValue(node, finish, rows, columns) {
  let rowNumber = Math.ceil(node / columns);
  let finishRowNumber = Math.ceil(finish / columns);
  let columnNumber = node - Math.floor(node / columns) * columns;

  let finishColumnNumber = finish - Math.floor(finish / columns) * columns;

  return (
    Math.abs(rowNumber - finishRowNumber) +
    Math.abs(columnNumber - finishColumnNumber)
  );
}

function isDestination(node, finish) {
  if (node !== finish) {
    return false;
  } else {
    return true;
  }
}

function isValid(node, numberOfNodes) {
  if (node > 0 && node < numberOfNodes) {
    return true;
  } else {
    return false;
  }
}

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

function findMinimum(openList) {
  let min = Number.MAX_SAFE_INTEGER;
  let index;

  for (let i in openList) {
    if (openList[i] <= min) {
      min = openList[i];
      index = i;
    }
  }
  return index;
}

function tracePath(cellDetails, dest, conqueredList) {
  let pos = dest;
  const Path = [];
  while (!(cellDetails[pos].parent == pos)) {
    Path.push(pos);
    pos = cellDetails[pos].parent;
  }
  let reversedPath = Path.reverse();
  return { path: reversedPath, conqueredNode: conqueredList };
}

export default A_star_pathfinding;
