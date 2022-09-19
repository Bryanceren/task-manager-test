import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../assets/icons/SearchBar-Search.svg";
import { ReactComponent as NotificationIcon } from "../assets/icons/SearchBar-Notification.svg";
import Avatar from "../assets/images/Avatar.png";

const SearchBar = () => {
  return (
    <MainWrapper>
      <div>
        <SearchIcon />
        <SearchInput />
      </div>
      <div>
        <NotificationIcon />
        <img src={Avatar} alt="profileAvatar" />
      </div>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  border-radius: 16px;
  padding-left: 22px;
  padding-right: 24px;
  display: flex;
  height: 64px;
  color: ${(props) => props.theme.neutral1};
  fill: ${(props) => props.theme.neutral1};
  background-color: ${(props) => props.theme.bgLight};
  justify-content: space-between;
  div {
    display: inline-flex;
    gap: 26px;
    align-items: center;
  }
`;
const SearchInput = styled.input.attrs({ placeholder: "Search" })`
  background-color: transparent;
  border: none;
  width: 100%;
  :focus {
    outline: none;
  }
  color: ${(props) => props.theme.neutral1};
`;
export default SearchBar;
