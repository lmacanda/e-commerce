"use client";
import React from "react";
import styled from "styled-components";

type ButtonFont = "regular" | "bold";
interface StyledButtonProps {
  fontSize: ButtonFont;
}

const getButtonFontSize = (fontSize: ButtonFont) => {
  switch (fontSize) {
    case "regular":
      return "1.25rem";
    case "bold":
      return "1.5rem";
    default:
      return "1.25rem";
  }
};

const Button = styled.button<StyledButtonProps>`
  color: #000000;
  padding-bottom: 0.625rem;
  font-size: ${(props) => getButtonFontSize(props.fontSize)};
  font-weight: 500;
`;

const StyledButton: React.FC<StyledButtonProps> = ({ fontSize, children }) => {
  return <Button fontSize={fontSize}>{children}</Button>;
};

export default StyledButton;
