import React from "react";
import styled from "styled-components";

const Alert = ({ children }) => {
  return <AlertWrapper>{children}</AlertWrapper>;
};
const AlertWrapper = styled.div`
  margin: 0 auto;
  padding: 0px 42px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.bgLight};
  fill: white;
  display: flex;
  gap: 16px;
  justify-content: center;
  font-size: xx-large;
  line-height: normal;
  font-weight: 700;
  color: white;
  svg {
    animation: spin 1s linear infinite;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
export default Alert;
