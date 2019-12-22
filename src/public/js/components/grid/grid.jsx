import React, { Component } from "react";
import Node from "./node.jsx";
import "../../../css/grid.css";

const rows = 35;
const columns = 50;
const initialStart = (35 * 50) / 2 - 10;
const initialFinish = initialStart + 20;

export default class grid extends Component {
  constructor(props) {
    super(props);
    this.myRef = [];
  }
  componentDidMount() {
    const grid = init_Grid(rows, columns, initialStart, initialFinish);
    this.props.setStart_Finish(initialStart, initialFinish);
    this.props.onChange(grid);
  }

  componentDidUpdate(prevProps) {
    let myRef = this.myRef;
    let j = 0;
    for (let i of this.props.shortestPath) {
      j++;
      setTimeout(
        function(myRef, i) {
          myRef[i].classList.add("node-path");
        },

        j * 500,

        myRef,
        i
      );
      // this.myRef[i].classList.add("node-path");
    }
  }

  // componentDidUpdate(prevProps) {
  //   for (let i of this.props.shortestPath) {
  //     if (this.props.adjencyVertexes[i] !== prevProps.shortestPath[i]) {
  //       this.props.setState(prevState => ({
  //         shortestPath: {
  //           ...prevState.shortestPath,
  //           [prevState.shortestPath[i].isShortest]: true
  //         }
  //       }));
  //     }
  //   }
  // }

  isEqual(state, prevState) {
    if (state.length !== prevState.length) {
      return false;
    } else {
      return;
    }
  }

  render() {
    return (
      <div className="grid">
        {this.props.adjencyVertexes.map((adjencyVertex, index) => (
          <Node
            key={index}
            ref={ref => {
              this.myRef[index] = ref;
            }}
            node={adjencyVertex}
          />
        ))}
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
        array[k] = { adjent: adjencyVertexes, isShortest: false };
      } else {
        array[k] = { adjent: adjencyVertexes, start: true, isShortest: false };
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
