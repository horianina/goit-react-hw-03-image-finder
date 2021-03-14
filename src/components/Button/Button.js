import React, { Component } from "react";
import { ButtonContainer } from "./ButtonStyled";

class Button extends Component {
  render() {
    return (
      <ButtonContainer>
        <button type="button">Load more</button>
      </ButtonContainer>
    );
  }
}
export default Button;
