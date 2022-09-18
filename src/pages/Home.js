import React from "react";
import styled from "styled-components";
import BottomNav from "../components/BottomNav";
import Dashboard from "../components/Dashboard";
import SearchBar from "../components/SearchBar";
import SideBar from "../components/SideBar";
import ThemeLayout from "../layouts/ThemeLayout";

const MainWrapper = styled.div`
  position: relative;
  display: flex;
  font-family: sans-serif;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgMain};
`;

const FlexContainer = styled.div`
  width: 100%;
  padding: 32px;
  //add extra padding for bottom navigation in small devices
  @media only screen and (max-width: 769px) {
    padding-bottom: 112px;
  }
  display: flex;
  gap: 32px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 36px;
  flex-direction: column;
`;

const Home = () => {
  return (
    <ThemeLayout>
      <MainWrapper>
        <FlexContainer>
          <SideBar />
          <Container>
            <SearchBar />
            <Dashboard />
          </Container>
        </FlexContainer>
        <BottomNav />
      </MainWrapper>
    </ThemeLayout>
  );
};

export default Home;
