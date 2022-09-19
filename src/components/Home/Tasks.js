import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import { useQuery } from "@apollo/client";
import { GET_TASKS } from "../../pages/api/HomeQueries";
import styled from "styled-components";
import { ReactComponent as LoadingIcon } from "../../assets/icons/LoadingIcon.svg";
import Alert from "../Alert";

const Tasks = () => {
  const { loading, error, data } = useQuery(GET_TASKS);
  const [tasks, setTasks] = useState([]);

  const groupBy = (arrayToGroup, key) => {
    return arrayToGroup.reduce((resultObject, item) => {
      (resultObject[item[key]] = resultObject[item[key]] || []).push(item);
      return resultObject;
    }, {});
  };

  useEffect(() => {
    if (loading === true || !data) return;

    if (data.tasks.length === 0) return;

    //I did an order by to the original array in order
    // to separate the tasks for each status column
    var groupedTasksAux = groupBy(data.tasks, "status");
    var groupedTask = Object.keys(groupedTasksAux).map((key) => {
      return { name: key, values: groupedTasksAux[key] };
    });
    setTasks(groupedTask);
  }, [loading, data]);

  if (loading)
    return (
      <Alert>
        <LoadingIcon width={"32px"} />
        <h4>Loading, please wait...</h4>
      </Alert>
    );
  if (error)
    return (
      <Alert>
        <h4>An error occured {error.message}</h4>
      </Alert>
    );

  return (
    <TasksGrid>
      {tasks.length > 0 ? (
        tasks.map((taskColumn) => (
          <Column key={taskColumn.name}>
            <ColumnTitle>
              {taskColumn.name} ({taskColumn.values.length})
            </ColumnTitle>
            {taskColumn.values.map((task) => (
              <TaskCard
                key={taskColumn.name + task.id}
                name={task.name}
                tags={task.tags}
                dueDate={task.dueDate}
                estimatedTime={task.pointEstimate}
                avatar={task.assignee.avatar}
              />
            ))}
          </Column>
        ))
      ) : (
        <Alert>
          <h4>No tasks Found!</h4>
        </Alert>
      )}
    </TasksGrid>
  );
};

const TasksGrid = styled.div`
  display: flex;
  overflow-x: auto;
  margin: 0 auto;
  grid-column-gap: 32px;
  grid-row-gap: 16px;
  //because this are fixed columns, I had to make this calculation
  //with the addition of spacing attributes
  //in order to handle the responsive overflow in the X axis
  width: calc(100vw - 84px);
  @media only screen and (min-width: 769px) {
    width: calc(100vw - 348px);
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
  min-width: 348px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const ColumnTitle = styled.div`
  color: white;
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
  display: flex;
  align-items: center;
  letter-spacing: 0.75px;
`;

export default Tasks;
