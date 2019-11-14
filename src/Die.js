import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    console.log(this.props.dieImage);
    return (
      <i
        className={`${this.props.dieImage} ${
          this.props.isRolling ? "shaking" : ""
        }`}
      />
    );
  }
}

export default Die;
