import React from "react";
import styled from "styled-components";
import Dashboard from "../components/Home/Dashboard";
import Sidebar from "../components/Sidebar";
import PageLayout from "../layouts/PageLayout";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgMain};
`;
const FlexWrapper = styled.div`
  padding: 32px;
  display: inline-flex;
  gap: 32px;
`;

const Home = () => {
  return (
    <PageLayout>
      <Wrapper>
        <FlexWrapper>
          <Sidebar />
          <Dashboard />
        </FlexWrapper>
      </Wrapper>
    </PageLayout>
  );
};

export default Home;
