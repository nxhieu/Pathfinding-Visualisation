import React, { Component } from "react";
import Navbar from "../navbar/navbar.jsx";
import Node from "./node.jsx";
import update from "immutability-helper";
import "../../../css/grid.css";

const rows = 20;
const columns = 40;
const initialStart = Math.floor((rows * columns) / 2 - 10);
const initialFinish = Math.floor(initialStart + 20);

export default class grid extends Component {
  constructor(props) {
    super(props);
    this.myRef = [];
    this.state = {
      rows: null,
      columns: null,
      grid: [],
      start: null,
      finish: null,
      shortestPath: [],
      conqueredNode: [],
      isVisualized: false,
      isMouseOnStart: false,
      isMouseClicked: false,
      isMouseOnFinish: false
    };
  }

  componentDidMount() {
    const grid = init_Grid(rows, columns, initialStart, initialFinish);
    if (!this.state.start) {
      console.log(" not   here");
      this.setState({ start: initialStart, finish: initialFinish });
    } else {
      this.setState({ start: this.state.start, finish: this.state.finish });
    }
    this.setState({ rows: 20, columns: 40 });
    this.setState({ grid });
  }

  componentDidUpdate(prevProps) {
    if (
      this.state.isVisualized !== prevProps.isVisualized &&
      this.state.isVisualized === true
    ) {
      let myRef = this.myRef;
      let k = 0;
      for (let i of this.state.conqueredNode) {
        k++;
        setTimeout(
          function(myRef, i) {
            myRef[i].classList.replace("node-normal", "node-conquered");
          },

          k * 50,

          myRef,
          i
        );
        // this.myRef[i].classList.add("node-path");
      }
      let j = 0;
      let shortestPath = this.state.shortestPath;
      let length = this.state.conqueredNode.length;

      setTimeout(
        function(shortestPath) {
          for (let i of shortestPath) {
            j++;
            setTimeout(
              function(myRef, i) {
                myRef[i].classList.replace("node-conquered", "node-path");
              },

              j * 40,

              myRef,
              i
            );
          }
        },
        length * 50,
        shortestPath
      );
    } else {
      return false;
    }
  }

  setStart(start) {
    this.setState({ start });
  }

  setPath(shortestPath, conqueredNode) {
    this.setState({ shortestPath, conqueredNode });
  }

  setVisualize(isVisualized) {
    if (this.state.isVisualized === false) {
      this.setState({ isVisualized });
    }
  }
  handleMouseDown = index => {
    console.log("?");
    console.log(this.state.start === index);
    if (!this.state.isMouseOnStart && index === this.state.start) {
      this.setState({ isMouseOnStart: true });
    } else if (
      !this.state.isMouseClicked &&
      index !== this.state.start &&
      index !== this.state.finish &&
      !this.state.isMouseOnStart &&
      !this.state.isMouseOnFinish
    ) {
      this.setState({ isMouseClicked: true });
    } else if (
      !this.state.isMouseClicked &&
      index === this.state.finish &&
      !this.state.isMouseOnFinish &&
      !this.state.isMouseOnStart
    ) {
      this.setState({ isMouseOnFinish: true });
    }
  };

  handleMouseUp = index => {
    if (this.state.isMouseOnStart) {
      this.setState({ isMouseOnStart: false });
      this.setState({
        grid: changeStartorFinish(this.state.grid, index, this.state.start),
        start: index
      });
    } else if (this.state.isMouseClicked) {
      this.setState({ isMouseClicked: false });
      this.setState({
        grid: update(this.state.grid, {
          [index]: { isBlocked: { $set: true } }
        })
      });
    } else if (this.state.isMouseOnFinish) {
      this.setState({ isMouseOnFinish: false });
      this.setState({
        grid: changeFinish(this.state.grid, index, this.state.finish),
        finish: index
      });
    }
  };

  handleMouseEnter = index => {
    if (this.state.isMouseOnStart) {
      this.setState({
        grid: changeStartorFinish(this.state.grid, index, this.state.start),
        start: index
      });
    } else if (this.state.isMouseClicked && !this.state.isMouseOnFinish) {
      console.log("tf");
      this.setState({
        grid: update(this.state.grid, {
          [index]: { isBlocked: { $set: true } }
        })
      });
    } else if (this.state.isMouseOnFinish) {
      this.setState({ isMouseOnFinish: false });
      this.setState({
        grid: changeFinish(this.state.grid, index, this.state.finish),
        finish: index
      });
    }
  };

  isEqual(state, prevState) {
    if (state.length !== prevState.length) {
      return false;
    } else {
      return;
    }
  }

  render() {
    const { grid, shortestPath, conqueredNode } = this.state;
    return (
      <div>
        <Navbar
          state={this.state}
          setVisualize={this.setVisualize.bind(this)}
          setPath={this.setPath.bind(this)}
        />
        <div className="grid">
          {this.state.grid.map((adjencyVertex, index) => (
            <Node
              key={index}
              index={index}
              ref={ref => {
                this.myRef[index] = ref;
              }}
              node={adjencyVertex}
              handleMouseDown={this.handleMouseDown}
              handleMouseUp={this.handleMouseUp}
              handleMouseEnter={this.handleMouseEnter}
            />
          ))}
        </div>
      </div>
    );
  }
}

function init_Grid(rows, columns, initialStart, initialFinish) {
  let array = [];
  let maximum = maximumNode(rows, columns);

  let k = 1;
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      let adjencyVertexes = addEdges(k, rows, columns, maximum);
      if (k !== initialStart) {
        array[k] = { adjent: adjencyVertexes, isBlocked: false };
      } else {
        array[k] = { adjent: adjencyVertexes, start: true, isBlocked: false };
      }
      if (k === initialFinish) {
        array[k].finish = true;
      }

      k++;
    }
  }
  return array;
}

function addEdges(k, rows, column, maximum) {
  let adjencyVertex = [];
  if (k + column <= maximum) {
    adjencyVertex.push(k + column);
  }
  if (k - column > 0) {
    adjencyVertex.push(k - column);
  }
  if (k % column === 0) {
    adjencyVertex.push(k - 1);
  } else if (k % column === 1) {
    adjencyVertex.push(k + 1);
  } else {
    adjencyVertex.push(k + 1);
    adjencyVertex.push(k - 1);
  }
  return adjencyVertex;
}

function maximumNode(rows, columns) {
  return rows * columns;
}

function changeStartorFinish(grid, index, oldindex) {
  console.log("change grid");
  let newGrid = Object.assign([], grid);
  newGrid[oldindex].start = false;
  newGrid[index].start = true;
  return newGrid;
}

function changeFinish(grid, index, oldindex) {
  console.log("change grid");
  let newGrid = Object.assign([], grid);
  newGrid[oldindex].finish = false;
  newGrid[index].finish = true;
  return newGrid;
}

function addBlocktoGrid(grid, index) {
  console.log("add block");

  // let newGrid = Object.assign([], grid);

  let newGrid = update(grid, { [index]: { isBlocked: { $set: true } } });
  // if (!newGrid[index].start) {
  //   newGrid[index].isBlocked = true;
  // }

  return newGrid;
}
