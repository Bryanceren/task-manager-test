import React from "react";
import styled from "styled-components";
import { ReactComponent as DashboardIcon } from "../assets/icons/SideBar-Dash.svg";
import { ReactComponent as PlusIcon } from "../assets/icons/Dash-PlusIcon.svg";

const MainWrapper = styled.div`
  height: 79px;
  width: 100%;
  bottom: 0px;
  position: fixed;
  display: none;
  @media only screen and (max-width: 769px) {
    display: block;
  }
  background-color: ${(props) => props.theme.bgLight};
`;

const Options = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;
const NavOption = styled.div`
  display: flex;
  text-align: center;
  gap: 5px;
  flex-direction: column;
  font-weight: bold;
  svg {
    margin: 0 auto;
  }
  :hover,
  :active {
    color: ${(props) => props.theme.primary};
    fill: ${(props) => props.theme.primary};
  }
  color: ${(props) => props.theme.neutral1};
  fill: ${(props) => props.theme.neutral1};
`;
const BottomNav = () => {
  return (
    <MainWrapper>
      <Options>
        <NavOption>
          <DashboardIcon />
          Dash
        </NavOption>
        <NavOption>
          <PlusIcon />
          Add
        </NavOption>
      </Options>
    </MainWrapper>
  );
};

export default BottomNav;
