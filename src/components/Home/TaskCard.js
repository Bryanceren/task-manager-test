import React from "react";
import styled from "styled-components";
import { ReactComponent as OptionsIcon } from "../../assets/icons/TaskCard-Options.svg";
import { ReactComponent as ClockIcon } from "../../assets/icons/TaskCard-Clock.svg";
import { ReactComponent as ClipIcon } from "../../assets/icons/TaskCard-Clipboard.svg";
import { ReactComponent as BranchIcon } from "../../assets/icons/TaskCard-Branch.svg";
import { ReactComponent as CommentIcon } from "../../assets/icons/TaskCard-Comment.svg";
import Moment from "react-moment";
import Button from "../Button";
import Badge from "../Badge";

const TaskCard = ({ name, tags, dueDate, estimatedTime, avatar }) => {
  var today = new Date();
  var dueDateParsed = new Date(dueDate);
  var diff = dueDateParsed.getTime() - today.getTime();
  var daydiff = (diff / (1000 * 3600 * 24)).toFixed(0);

  const color = daydiff < 0 ? "primary" : daydiff < 2 ? "tertiary" : "default";
  return (
    <MainWrapper>
      <SpacedRow>
        <TaskText>{name}</TaskText>
        <Button variant={"solo"}>
          <OptionsIcon />
        </Button>
      </SpacedRow>
      <SpacedRow>
        <TaskText subtitle>{estimatedTime} POINTS</TaskText>
        <Badge color={color}>
          <ClockIcon />
          <TaskText subtitle>
            <Moment format="D MMM, YYYY">{dueDate}</Moment>
          </TaskText>
        </Badge>
      </SpacedRow>
      <GapRow>
        {tags.map((tag, index) => (
          <Badge
            key={"badge" + index}
            color={index === 0 ? "secondary" : "tertiary"}
          >
            {tag}
          </Badge>
        ))}
      </GapRow>
      <SpacedRow>
        <TaskAvatar>
          <img src={avatar} width="32px" alt="avatar"></img>
        </TaskAvatar>
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
  font-size: ${(props) => (props.subtitle ? "14px" : "18px")};
  line-height: ${(props) => (props.subtitle ? "24px" : "32px")};
  letter-spacing: 0.75px;
`;
const TaskAvatar = styled.div`
  img {
    border-radius: 20px;
  }
`;

export default TaskCard;
