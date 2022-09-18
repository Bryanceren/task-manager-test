import React from "react";
import Button from "./Button";
import { ReactComponent as PlusIcon } from "../assets/icons/Dash-PlusIcon.svg";
import styled from "styled-components";
import Tasks from "./Tasks";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const Dashboard = () => {
  return (
    <MainWrapper>
      <AddButtonWrapper>
        <Button variant={"icon"}>
          <PlusIcon />
        </Button>
      </AddButtonWrapper>
      <Tasks />
    </MainWrapper>
  );
};

export default Dashboard;
