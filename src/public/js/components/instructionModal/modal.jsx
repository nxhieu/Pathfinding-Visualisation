import React, { Component, Fragment } from "react";
import instruction from "../../../image/instruction.gif";
import "../../../css/modal.css";

export default class modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true
    };
  }

  openModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <Fragment>
        {this.state.isOpen ? (
          <div className="modal">
            <div className="modal-content">
              <span onClick={this.openModal} className="close">
                &times;
              </span>
              <div className="modal-title">
                <p>Welcome to Pathfinder ! </p>
                <img src={instruction} width="100"></img>
                <p>
                  To Visualize a pathfinding algorithm: Choose an algorithm ->
                  build walls -> click visualize !{" "}
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </Fragment>
    );
  }
}
