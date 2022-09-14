import React, { useState } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as RavnLogo } from "../assets/icons/Ravn-Black.svg";
import { ReactComponent as DashboardIcon } from "../assets/icons/SideBar-Dash.svg";
import { ReactComponent as TasksIcon } from "../assets/icons/SideBar-Task.svg";

const MainWrapper = styled.div`
  border-radius: 24px;
  padding-top: 14px;
  min-height: 836px;
  width: 232px;
  background-color: #2c2f33;
`;
const LogoWrapper = styled.div`
  text-align: center;
`;
const TabList = styled.div`
  margin-top: 46px;
`;
const Tab = styled.button`
  padding: 16px 20px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.primary};
    fill: ${(props) => props.theme.primary};
  }
  color: ${(props) => props.theme.neutral1};
  fill: ${(props) => props.theme.neutral1};
  width: 100%;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.75px;
  flex-direction: row;
  gap: 19px;
  ${(props) => {
    if (props.tabValue == props.currentTab) {
      return css`
        background-image: linear-gradient(
          to right,
          transparent,
          rgb(218, 88, 75, 0.2)
        );
        color: ${(props) => props.theme.primary};
        fill: ${(props) => props.theme.primary};
        border-right: ${(props) => props.theme.primary} solid 4px;
      `;
    }
  }};
`;

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <MainWrapper>
      <LogoWrapper>
        <RavnLogo />
      </LogoWrapper>
      <TabList>
        <Tab
          onClick={() => {
            setActiveTab(1);
          }}
          currentTab={activeTab}
          tabValue={1}
        >
          <DashboardIcon />
          <span>DASHBOARD</span>
        </Tab>
        <Tab
          onClick={() => {
            setActiveTab(2);
          }}
          currentTab={activeTab}
          tabValue={2}
        >
          <TasksIcon />
          <span>MY TASKS</span>
        </Tab>
      </TabList>
    </MainWrapper>
  );
};

export default Sidebar;
