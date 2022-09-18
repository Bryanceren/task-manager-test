import React from "react";
import styled, { css } from "styled-components";
import { ReactComponent as OptionsIcon } from "../assets/icons/TaskCard-Options.svg";
import { ReactComponent as ClockIcon } from "../assets/icons/TaskCard-Clock.svg";
import { ReactComponent as ClipIcon } from "../assets/icons/TaskCard-Clipboard.svg";
import { ReactComponent as BranchIcon } from "../assets/icons/TaskCard-Branch.svg";
import { ReactComponent as CommentIcon } from "../assets/icons/TaskCard-Comment.svg";
import Button from "./Button";

const MainWrapper = styled.div`
  border-radius: 8px;
  padding: 16px;
  background-color: ${(props) => props.theme.bgLight};
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const SpacedRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const GapRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;
const TaskText = styled.div`
  color: white;
  font-weight: ${(props) => (props.light ? 400 : 600)};
  font-size: ${(props) => (props.subtitle ? "15px" : "18px")};
  line-height: ${(props) => (props.subtitle ? "24px" : "32px")};
  letter-spacing: 0.75px;
`;

const TaskBadge = styled.div`
  padding: 4px 16px;
  display: flex;
  border-radius: 4px;
  gap: 9px;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  ${(props) => {
    switch (props.color) {
      case "primary":
        return css`
          background-color: rgba(218, 88, 75, 0.1);
          color: ${props.theme.primary};
          fill: ${props.theme.primary};
        `;
      case "secondary":
        return css`
          background-color: rgba(112, 178, 82, 0.1);
          color: ${props.theme.secondary};
        `;
      case "tertiary":
        return css`
          background-color: rgba(229, 180, 84, 0.1);
          color: ${props.theme.tertiary};
        `;
      default:
        return css`
          background-color: rgba(148, 151, 154, 0.1);
          color: white;
          fill: white;
        `;
    }
  }};
`;
const TaskCard = ({ name, tags, dueDate, estimatedTime, avatar }) => {
  return (
    <MainWrapper>
      <SpacedRow>
        <TaskText>{name}</TaskText>
        <Button variant={"solo"}>
          <OptionsIcon />
        </Button>
      </SpacedRow>
      <SpacedRow>
        <TaskText subtitle>{estimatedTime} Points</TaskText>
        <TaskBadge>
          <ClockIcon />
          <TaskText subtitle>{dueDate}</TaskText>
        </TaskBadge>
      </SpacedRow>
      <GapRow>
        <TaskBadge color={"secondary"}>{tags[0]}</TaskBadge>
        <TaskBadge color={"tertiary"}>{tags[1]}</TaskBadge>
      </GapRow>
      <SpacedRow>
        <img src={avatar} width="32px"></img>
        <GapRow>
          <ClipIcon />
          <TaskText subtitle light>
            5
          </TaskText>
          <BranchIcon />
          <TaskText subtitle light>
            3
          </TaskText>
          <CommentIcon />
        </GapRow>
      </SpacedRow>
    </MainWrapper>
  );
};

export default TaskCard;
