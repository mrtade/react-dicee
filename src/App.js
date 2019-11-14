import React, { Component } from "react";
import "./App.css";
import "./RollStage.css";
import Die from "./Die";

class App extends Component {
  state = {
    dieImage1: "fas fa-dice-one fa-10x",
    dieImage2: "fas fa-dice-one fa-10x",
    isRolling: false
  };

  rollHandler = () => {
    let dieNum1 = Math.floor(Math.random() * 6) + 1;
    let dieNumText1 = "";

    if (dieNum1 === 1) {
      dieNumText1 = "one";
    } else if (dieNum1 === 2) {
      dieNumText1 = "two";
    } else if (dieNum1 === 3) {
      dieNumText1 = "three";
    } else if (dieNum1 === 4) {
      dieNumText1 = "four";
    } else if (dieNum1 === 5) {
      dieNumText1 = "five";
    } else if (dieNum1 === 6) {
      dieNumText1 = "six";
    }
    let updatedDieImage1 = `fas fa-dice-${dieNumText1} fa-10x`;

    let dieNum2 = Math.floor(Math.random() * 6) + 1;
    let dieNumText2 = "";

    if (dieNum2 === 1) {
      dieNumText2 = "one";
    } else if (dieNum2 === 2) {
      dieNumText2 = "two";
    } else if (dieNum2 === 3) {
      dieNumText2 = "three";
    } else if (dieNum2 === 4) {
      dieNumText2 = "four";
    } else if (dieNum2 === 5) {
      dieNumText2 = "five";
    } else if (dieNum2 === 6) {
      dieNumText2 = "six";
    }
    let updatedDieImage2 = `fas fa-dice-${dieNumText2} fa-10x`;

    this.setState({
      dieImage1: updatedDieImage1,
      dieImage2: updatedDieImage2,
      isRolling: true
    });

    setTimeout(() => this.setState({ isRolling: false }), 1120);
  };

  render() {
    return (
      <div className="App">
        <div className="rollStage">
          <Die
            dieImage={this.state.dieImage1}
            isRolling={this.state.isRolling}
          />
          <Die
            dieImage={this.state.dieImage2}
            isRolling={this.state.isRolling}
          />
        </div>
        <div className="rollStage">
          <button
            onClick={this.rollHandler}
            className="button"
            disabled={this.state.isRolling}
          >
            {this.state.isRolling ? "Rolling..." : "Roll Dice!"}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
