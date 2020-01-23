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
      selectValue: "Algorithms",
      isDropDown: false
    };
  }

  onDropDown = () => {
    this.setState({ isDropDown: !this.state.isDropDown });
  };

  handleDropdownButton = value => {
    this.setState({ selectValue: value });
  };

  // dropdown list

  openList = () => {
    return (
      <ul className="option_algorithms">
        <li onClick={() => this.handleDropdownButton("Dijkstra")}>Dijkstra</li>
        <li onClick={this.handleDropdownButton.bind(this, "A*")}>A*</li>
        <li
          onClick={this.handleDropdownButton.bind(this, "Breath-first search")}
        >
          Breath-first search
        </li>
        <li
          onClick={this.handleDropdownButton.bind(this, "Depth-first search")}
        >
          Depth-first search
        </li>
      </ul>
    );
  };

  onVisualize = () => {
    if (!this.props.state.isVisualized) {
      this.props.resetVisualize();

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
    }
  };

  render() {
    let background = this.props.state.isVisualized ? "#fb8c00" : null;
    let background_color = { color: background };
    return (
      <div className="main-nav">
        <div className="upper-nav">
          <p className="page-title">PathFinder</p>
          <ul className="upper-nav-list">
            <li>
              <div onClick={this.onDropDown} className="dropdown algorithm">
                <div className="select">
                  <p>
                    {this.state.selectValue
                      ? this.state.selectValue
                      : "Algorithms"}
                  </p>
                  <i className="material-icons md-light md-inactive">
                    {" "}
                    keyboard_arrow_down
                  </i>
                </div>
                {this.state.isDropDown ? this.openList() : null}
              </div>
            </li>
            <li>
              <button onClick={this.onVisualize} style={background_color}>
                {this.props.state.isVisualized ? "Visualizing !" : "Visualize"}
              </button>
            </li>

            <li>
              <a onClick={this.props.clearWalls} href="#">
                Clear walls
              </a>
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
