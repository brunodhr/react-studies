import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./styles";

const Button = ({ onClick }) => (
  <StyledButton onClick={onClick}>PESQUISAR</StyledButton>
);
export default Button;
