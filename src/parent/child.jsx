import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    console.log("Log from constructor child.");
    this.state = {
      counter: props.counter,
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //   // this.setState({ counter: props.counter }, () =>
  //   //   console.log("Updated state", this.state.counter)
  //   // );
  //   console.log("Log from getDerivedStateFromProps Child.", props, state);
  //   return { counter: props.counter };
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log(
  //     "Log from getSnapshotBeforeUpdate Child.",
  //     prevProps,
  //     prevState
  //   );
  // }

  render() {
    return <h3>This is child Component. Counter: {this.state.counter}</h3>;
  }
}

export default Child;
