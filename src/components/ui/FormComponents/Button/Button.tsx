import * as React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */ jsx;
import { css, jsx } from "@emotion/core";
import { IButton } from "./Button.interfaces";
import "./Button.styles.css";

const titleStyle = css({
  boxSizing: "border-box",
  width: 300,
  height: 200,
  background: 'red'
});

class Button extends React.Component<IButton> {
  handleOnClick = e => {
    e.preventDefault();
    const { disabled, onClick } = this.props;
    if (onClick && !disabled) {
      onClick();
    }
  };

  render() {
    const { caption, disabled = false, className } = this.props;

    return (
      <button
        onClick={this.handleOnClick}
        css={[titleStyle]}
        className={className}
        disabled={disabled}
      >
        {caption}
      </button>
    );
  }
}

export default Button;
