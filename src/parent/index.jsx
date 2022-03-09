import React, { Component } from "react";
import Child from "./child";
import "./index.css";
import List from "./List";

class Parent extends Component {
  constructor() {
    super();
    console.log("Log from constructor.");
    this.state = {
      counter: 1,
    };

    this.updateCounter = this.updateCounter.bind(this);
  }

  componentDidMount() {
    console.log("Log from componentDidMount.");
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("Log from getDerivedStateFromProps.", props, state);
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("Log from getSnapshotBeforeUpdate.", prevProps, prevState);
  // }

  updateCounter() {
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(this.state.counter);
    });
  }

  render() {
    return (
      <>
        <h1>Parent Component</h1>
        <h2>Counter: {this.state.counter}</h2>
        {/* <button onClick={() => this.updateCounter()}>Click Me!</button> */}
        <button onClick={this.updateCounter}>Click Me!</button>
        {Array.from(Array(this.state.counter).keys()).map((value, index) => {
          return <Child key={index + 1} counter={value + 1} />;
        })}
        <List key={1} />
      </>
    );
  }
}

export default Parent;
