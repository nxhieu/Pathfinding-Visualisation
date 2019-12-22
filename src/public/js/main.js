import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar/navbar.jsx";
import Grid from "./components/grid/grid.jsx";
import "../css/main.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
      start: null,
      finish: null,
      shortestPath: [],
      conqueredNode: []
    };
  }

  setStart_Finish(start, finish) {
    this.setState({ start, finish });
  }

  setGrid(grid) {
    this.setState({ grid });
  }

  setPath(shortestPath, conqueredNode) {
    this.setState({ shortestPath, conqueredNode });
  }

  render() {
    const { grid, shortestPath } = this.state;

    return (
      <div className="body">
        <Navbar state={this.state} setPath={this.setPath.bind(this)} />
        <Grid
          shortestPath={shortestPath}
          adjencyVertexes={grid}
          onChange={this.setGrid.bind(this)}
          setStart_Finish={this.setStart_Finish.bind(this)}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
