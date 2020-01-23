import React, { Component } from "react";
import ReactDOM from "react-dom";
import Grid from "./components/grid/grid.jsx";
import Modal from "./components/instructionModal/modal.jsx";
import "../css/main.css";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="body">
        <Grid />
        <Modal />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
