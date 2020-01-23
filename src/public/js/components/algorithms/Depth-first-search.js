/* Depth-first search recursion version*/
let foundDestination = false;

function search(grid, start, finish, numberOfNode, rows, columns) {
  let closedList = {};
  let conqueredList = [];

  closedList[start] = 0;

  depth_First_Search(start, grid, start, finish, closedList, conqueredList);

  if (foundDestination === true) {
    let path = tracePath(closedList, start, finish).reverse();

    return { path: path, conqueredNode: path };
  } else {
    return { path: [], conqueredNode: conqueredList };
  }
}

function depth_First_Search(
  index,
  grid,
  start,
  finish,
  closedList,
  conqueredList
) {
  for (let i of grid[index].adjent) {
    if (!closedList[i] && grid[i].isBlocked === false) {
      closedList[i] = index;
      conqueredList.push(i);
      if (index === finish) {
        foundDestination = true;
      }
      if (index !== finish) {
        depth_First_Search(i, grid, start, finish, closedList, conqueredList);
      }
    }
  }
}

function tracePath(closedList, start, finish) {
  let path = [];
  let i = finish;
  let j = 1;
  while (i !== start && j <= 800) {
    path.push(closedList[i]);
    i = closedList[i];
    j++;
  }
  return path;
}

export default search;
