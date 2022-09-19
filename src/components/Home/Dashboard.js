import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as PlusIcon } from "../../assets/icons/Dash-PlusIcon.svg";
import Button from "../Button";
import Modal from "./Modal";
import Tasks from "./Tasks";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const addTaskHandler = (e) => {
    setIsOpen(true);
  };
  return (
    <MainWrapper>
      <AddButtonWrapper>
        <Button variant={"icon"} onClick={addTaskHandler}>
          <PlusIcon />
        </Button>
      </AddButtonWrapper>
      <div>
        <Tasks />
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen}></Modal>}
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
export default Dashboard;
