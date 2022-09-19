import React from "react";
import styled, { css } from "styled-components";

const Button = ({ variant, children, ...rest }) => {
  return (
    <ButtonComponent variant={variant} {...rest}>
      {children}
    </ButtonComponent>
  );
};

const ButtonComponent = styled.button`
  border-radius: 8px;
  display: flex;
  gap: 10px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  :active {
    scale: 95%;
  }
  ${(props) => {
    switch (props.variant) {
      case "icon":
        return css`
          padding: 13px;
          background-color: ${props.theme.primary};
          color: white;
          fill: white;
        `;
      case "solo":
        return;
      case "outlined":
        return css`
          padding: 13px;
          color: ${props.theme.primary};
          fill: ${props.theme.primary};
          border: ${props.theme.primary} solid 1px;
        `;
      default:
        return css`
          padding: 8px;
          background-color: ${props.bgColor || props.theme.primary};
          color: white;
          fill: white;
        `;
    }
  }}
`;

export default Button;
