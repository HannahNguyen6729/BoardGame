import React, { useState } from "react";

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.prop = props;
    this.state = { white: "square whiteSquare", black: "square blackSquare" };
  }

  render() {
    const index = this.prop.index;

    if (index % 2 === 0) {
      return (
        <button
          className={this.state.white}
          onClick={() => this.setState({ white: "square blackSquare" })}
        />
      );
    } else {
      return (
        <button
          className={this.state.black}
          onClick={() => this.setState({ black: "square whiteSquare" })}
        />
      );
    }
  }
}
