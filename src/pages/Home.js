import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
const Wrapper = styled.div`
  padding: 32px;
  background-color: #222528;
`;
const Home = () => {
  return (
    <div>
      <Wrapper>
        <Sidebar />
      </Wrapper>
    </div>
  );
};

export default Home;
