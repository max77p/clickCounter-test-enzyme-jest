import React from "react";

const ButtonContainer = props => {
  return (
    <button
    data-test="increment-button"
    onClick={props.handleClick}
  >
    Increment
  </button>
  );
};

export default ButtonContainer;
