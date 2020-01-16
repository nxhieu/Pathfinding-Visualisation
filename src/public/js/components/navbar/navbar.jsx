import React, { Component } from "react";
import dijkstra from "../algorithms/dijkstra";
import Astar from "../algorithms/Astar";
import Breadth_first_search from "../algorithms/Breadth-first-search";
import search from "../algorithms/Depth-first-search";
import start from "../../../image/start.png";
import finish from "../../../image/finish.png";
import block from "../../../image/block.png";
import conquered from "../../../image/conquered.png";
import path from "../../../image/path.png";
import "../../../css/navbar.css";

export default class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: "Algorithms"
    };
  }

  handleDropdownButton = event => {
    console.log(event);
    this.setState({ selectValue: event.target.value });
  };

  onVisualize = () => {
    const {
      grid,
      start,
      finish,
      rows,
      columns,
      shortestPath
    } = this.props.state;

    if (this.state.selectValue === "Dijkstra") {
      const { path, conqueredNode } = dijkstra(grid, start, finish, 20 * 40);

      this.props.setPath(path, conqueredNode);

      this.props.setVisualize(true);
    }
    if (this.state.selectValue === "A*") {
      const { path, conqueredNode } = Astar(
        grid,
        start,
        finish,
        20 * 40,
        rows,
        columns
      );
      this.props.setPath(path, conqueredNode);

      this.props.setVisualize(true);
    }
    if (this.state.selectValue === "Breath-first search") {
      const { path, conqueredNode } = Breadth_first_search(
        grid,
        start,
        finish,
        20 * 40,
        rows,
        columns
      );

      this.props.setPath(path, conqueredNode);

      this.props.setVisualize(true);
    }
    if (this.state.selectValue === "Depth-first search") {
      const { path, conqueredNode } = search(
        grid,
        start,
        finish,
        20 * 40,
        rows,
        columns
      );
      this.props.setPath(path, conqueredNode);

      this.props.setVisualize(true);
    }
  };

  render() {
    return (
      <div className="main-nav">
        <div className="upper-nav">
          <p>PathFinder</p>
          <ul className="upper-nav-list">
            <li>
              <select
                value={this.state.selectValue}
                onChange={this.handleDropdownButton}
              >
                <option hidden value="Algorithms">
                  Algorithms
                </option>
                <option value="Dijkstra">Dijkstra</option>
                <option value="A*">A*</option>
                <option value="Breath-first search">Breath-first search</option>
                <option value="Depth-first search">Depth-first search</option>
              </select>
            </li>
            <li>
              <button onClick={this.onVisualize}>Visualize</button>
            </li>

            <li>
              <a href="#">Clear walls</a>
            </li>
          </ul>
        </div>
        <div className="lower-nav">
          <ul>
            <li>
              <img src={start} alt="start" />
              <p>Start</p>
            </li>
            <li>
              <img src={finish} alt="finish" />
              <p>Finish</p>
            </li>
            <li>
              <img src={path} alt="path" />
              <p>Path</p>
            </li>
            <li>
              <img src={block} alt="block" />
              <p>Block</p>
            </li>
            <li>
              <img src={conquered} alt="conquered" />
              <p>Conquered</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
