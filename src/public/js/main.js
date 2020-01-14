import React, { Component } from "react";
import ReactDOM from "react-dom";
import Grid from "./components/grid/grid.jsx";
import "../css/main.css";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="body">
        <Grid />
      </div>
    );
  }
}

// state={this.state}
// handleMouseDown={this.handleMouseDown}
// handleMouseUp={this.handleMouseUp}
// handleMouseEnter={this.handleMouseEnter}
// isVisualized={this.state.isVisualized}
// path={{ shortestPath, conqueredNode }}
// adjencyVertexes={grid}
// onChange={this.setGrid.bind(this)}
// setStart={this.setStart.bind(this)}
// setStart_Finish={this.setStart_Finish.bind(this)}

ReactDOM.render(<App />, document.getElementById("root"));
