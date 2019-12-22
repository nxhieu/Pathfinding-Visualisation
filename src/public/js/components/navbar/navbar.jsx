import React, { Component } from "react";
import dijkstra from "../algorithms/dijkstra";
import "../../../css/navbar.css";

export default class navbar extends Component {
  onVisualize() {
    const { grid, start, finish, shortestPath } = this.props.state;
    const { path, conqueredNode } = dijkstra(grid, start, finish, 35 * 50);
    console.log(conqueredNode);
    this.props.setPath(path, conqueredNode);
    // console.log(visitedNode);
  }

  render() {
    return (
      <div className="main-nav">
        <button onClick={this.onVisualize.bind(this)}>Visualize</button>
      </div>
    );
  }
}
