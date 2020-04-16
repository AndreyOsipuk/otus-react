import React, { Component } from "react";

export class HelloWorld extends Component<Prop, State> {
  state = {
    name: this.props.name || 'none',
  }

  render() {
    return (
      <h1>Hello {this.state.name}</h1>
    );
  }
}
