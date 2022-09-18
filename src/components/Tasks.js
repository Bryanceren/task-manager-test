import React from "react";
import styled from "styled-components";
import TaskCard from "./TaskCard";
import Avatar from "../assets/images/Avatar.png";

const Wrapper = styled.div`
  width: inherit;
`;

const TasksGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 348px);
  grid-auto-flow: column;
  overflow-x: auto;
  margin: 0 auto;
  padding: 20px 0px;
  grid-column-gap: 32px;
  grid-row-gap: 16px;
  //because this are fixed columns, I had to make this calculation
  //with the addition of spacing attributes
  //in order to handle the responsive overflow in the X axis
  width: calc(100vw - 84px);
  @media only screen and (min-width: 769px) {
    width: calc(100vw - 348px);
  }
  @media only screen and (min-width: 1455px) {
    width: auto;
  }
  ::-webkit-scrollbar {
    height: 7px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.bgLight};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.neutral1};
    border-radius: 10px;
  }
`;

const Column = styled.div`
  grid-column: span 1;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const ColumnTitle = styled.div`
  font-family: sans-serif;
  color: white;
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
  display: flex;
  align-items: center;
  letter-spacing: 0.75px;
`;

const Tasks = () => {
  return (
    <Wrapper>
      <TasksGrid>
        <Column>
          <ColumnTitle>{"Working (03)"}</ColumnTitle>
          <TaskCard
            name={"Slack"}
            tags={["ios app", "android"]}
            dueDate={"today"}
            estimatedTime={4}
            avatar={Avatar}
          />
          <TaskCard
            name={"Slack"}
            tags={["ios app", "android"]}
            dueDate={"today"}
            estimatedTime={4}
            avatar={Avatar}
          />
          <TaskCard
            name={"Slack"}
            tags={["ios app", "android"]}
            dueDate={"today"}
            estimatedTime={4}
            avatar={Avatar}
          />
        </Column>
        <Column>
          <ColumnTitle>{"In Progress (03)"}</ColumnTitle>
          <TaskCard
            name={"Slack"}
            tags={["ios app", "android"]}
            dueDate={"today"}
            estimatedTime={4}
            avatar={Avatar}
          />
          <TaskCard
            name={"Slack"}
            tags={["ios app", "android"]}
            dueDate={"today"}
            estimatedTime={4}
            avatar={Avatar}
          />
          <TaskCard
            name={"Slack"}
            tags={["ios app", "android"]}
            dueDate={"today"}
            estimatedTime={4}
            avatar={Avatar}
          />
        </Column>
        <Column>
          <ColumnTitle>{"Completed (03)"}</ColumnTitle>
          <TaskCard
            name={"Slack"}
            tags={["ios app", "android"]}
            dueDate={"today"}
            estimatedTime={4}
            avatar={Avatar}
          />
          <TaskCard
            name={"Slack"}
            tags={["ios app", "android"]}
            dueDate={"today"}
            estimatedTime={4}
            avatar={Avatar}
          />
          <TaskCard
            name={"Slack"}
            tags={["ios app", "android"]}
            dueDate={"today"}
            estimatedTime={4}
            avatar={Avatar}
          />
        </Column>
      </TasksGrid>
    </Wrapper>
  );
};

export default Tasks;
