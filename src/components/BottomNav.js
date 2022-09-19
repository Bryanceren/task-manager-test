import React from "react";
import styled from "styled-components";
import { ReactComponent as DashboardIcon } from "../assets/icons/SideBar-Dash.svg";
import { ReactComponent as AsigneeIcon } from "../assets/icons/Select-Asignee.svg";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();
  return (
    <MainWrapper>
      <Options>
        <Link to={"/"}>
          <NavOption active={location.pathname === "/"}>
            <DashboardIcon />
            <span>Dash</span>
          </NavOption>
        </Link>
        <Link to={"/settings"}>
          <NavOption active={location.pathname === "/settings"}>
            <AsigneeIcon />
            <span>Profile</span>
          </NavOption>
        </Link>
      </Options>
    </MainWrapper>
  );
};

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
  a {
    text-decoration: none;
  }
`;
const NavOption = styled.div`
  display: flex;
  text-align: center;
  cursor: pointer;
  gap: 5px;
  flex-direction: column;
  font-weight: bold;
  svg {
    margin: 0 auto;
  }
  fill: ${(props) =>
    props.active ? props.theme.primary : props.theme.neutral1};
  color: ${(props) =>
    props.active ? props.theme.primary : props.theme.neutral1};
`;

export default BottomNav;
