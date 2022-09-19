import React from "react";
import styled, { css } from "styled-components";

const Badge = ({ children, color }) => {
  return <TaskBadge color={color}>{children}</TaskBadge>;
};
const TaskBadge = styled.div`
  padding: 4px 16px;
  display: flex;
  border-radius: 4px;
  gap: 9px;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  ${(props) => {
    switch (props.color) {
      case "primary":
        return css`
          background-color: rgba(218, 88, 75, 0.1);
          & > *,
          & {
            color: ${props.theme.primary};
            fill: ${props.theme.primary};
          }
        `;
      case "secondary":
        return css`
          background-color: rgba(112, 178, 82, 0.1);
          & > *,
          & {
            color: ${props.theme.secondary};
          }
        `;
      case "tertiary":
        return css`
          background-color: rgba(229, 180, 84, 0.1);
          & > *,
          & {
            color: ${props.theme.tertiary};
            fill: ${props.theme.tertiary};
          }
        `;
      default:
        return css`
          background-color: rgba(148, 151, 154, 0.1);
          color: white;
          fill: white;
        `;
    }
  }};
`;
export default Badge;
