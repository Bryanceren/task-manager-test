import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import { ReactComponent as RavnLogo } from "../assets/icons/Ravn-Black.svg";
import { ReactComponent as DashboardIcon } from "../assets/icons/SideBar-Dash.svg";
import { ReactComponent as TasksIcon } from "../assets/icons/SideBar-Task.svg";

const SideBar = () => {
  const location = useLocation();
  return (
    <MainWrapper>
      <LogoWrapper>
        <RavnLogo />
      </LogoWrapper>
      <TabList>
        <Link to={"/"}>
          <Tab currentTab={location.pathname === "/"}>
            <DashboardIcon />
            <span>DASHBOARD</span>
          </Tab>
        </Link>
        <Link to={"/settings"}>
          <Tab currentTab={location.pathname === "/settings"}>
            <TasksIcon />
            <span>SETTINGS</span>
          </Tab>
        </Link>
      </TabList>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  border-radius: 24px;
  padding-top: 14px;
  min-height: 836px;
  min-width: 232px;
  display: none;
  @media only screen and (min-width: 769px) {
    display: block;
  }
  background-color: ${(props) => props.theme.bgLight};
`;
const LogoWrapper = styled.div`
  text-align: center;
`;
const TabList = styled.div`
  margin-top: 46px;
  a {
    text-decoration: none;
  }
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
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.75px;
  flex-direction: row;
  gap: 19px;
  ${(props) => {
    if (props.currentTab) {
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
export default SideBar;
