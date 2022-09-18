import React from "react";
import styled from "styled-components";
import ThemeLayout from "../layouts/ThemeLayout";

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  color: white;
  background-color: ${(props) => props.theme.bgMain};
  align-items: center;
  min-height: 100%;
  font-family: sans-serif;
`;
const NotFound = () => {
  return (
    <ThemeLayout>
      <MainWrapper>
        <h2>Ups! Page Not Found</h2>
      </MainWrapper>
    </ThemeLayout>
  );
};

export default NotFound;
