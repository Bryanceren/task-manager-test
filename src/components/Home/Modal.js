import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import CustomSelect from "../CustomSelect";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation, useQuery } from "@apollo/client";
import { GET_TASKS, GET_USERS } from "../../pages/api/HomeQueries";
import { CREATE_TASK } from "../../pages/api/HomeMutations";
import { ReactComponent as PlusMinusIcon } from "../../assets/icons/Select-PlusMinusIcon.svg";
import { ReactComponent as AsigneeIcon } from "../../assets/icons/Select-Asignee.svg";
import { ReactComponent as TagIcon } from "../../assets/icons/Select-Tag.svg";
import { ReactComponent as CalendarIcon } from "../../assets/icons/Select-Calendar.svg";
import { ReactComponent as LoadingIcon } from "../../assets/icons/LoadingIcon.svg";

const estimatesList = ["EIGHT", "FOUR", "ONE", "TWO", "ZERO"];
const tagsList = ["ANDROID", "IOS", "NODE_JS", "RAILS", "REACT"];
const statusList = ["BACKLOG", "CANCELLED", "DONE", "IN_PROGRESS", "TODO"];
const initialValues = {
  estimate: "",
  asignee: "",
  name: "",
  tags: "",
  status: "",
  startDate: new Date(),
};

const Modal = ({ setIsOpen }) => {
  const [values, setValues] = useState(initialValues);
  const [users, setUsers] = useState();
  const [formValid, setFormValid] = useState(true);
  const { loading, error, data } = useQuery(GET_USERS);

  const [addTodo, { loading: loadingMutation, error: errorMutation }] =
    useMutation(CREATE_TASK, {
      refetchQueries: [{ query: GET_TASKS }, "GetTasks"],
    });

  useEffect(() => {
    if (loading === true || !data) return;
    if (data.users.length === 0) return;
    if (error) return;
    setUsers(data.users);
  }, [loading, data, error]);

  const handleInputChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  //Function for validating Task form
  const validateValues = () => {
    var isValid = true;
    const formKeys = Object.keys(values);
    formKeys.forEach((key) => {
      if (!values[key]) {
        isValid = false;
      }
    });
    setFormValid(isValid);
    return isValid;
  };

  //Task submit
  const handleAddClick = (e) => {
    if (validateValues() === false) return;

    addTodo({
      variables: {
        assigneeId: values.asignee.id,
        dueDate: values.startDate,
        name: values.name,
        pointEstimate: values.estimate,
        status: values.status,
        tags: values.tags,
      },
    }).finally(setIsOpen(false));
  };
  return (
    <MainWrapper>
      <CenteredContainer>
        <ModalContainer>
          <Input
            placeholder="Task Title"
            name="name"
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
          <FlexContainer>
            <CustomSelect
              label="Estimate"
              options={estimatesList}
              onChange={(e) => handleInputChange("estimate", e)}
              icon={<PlusMinusIcon />}
            />
            <CustomSelect
              label="Asignee"
              itemvalue="id"
              itemtext="fullName"
              options={users ? users : []}
              onChange={(e) => handleInputChange("asignee", e)}
              icon={<AsigneeIcon />}
            />
            <CustomSelect
              label="Tags"
              options={tagsList}
              onChange={(e) => handleInputChange("tags", e)}
              multiple
              icon={<TagIcon />}
            />
            <CustomSelect
              label="Status"
              options={statusList}
              onChange={(e) => handleInputChange("status", e)}
            />
            <DatePicker
              selected={initialValues.startDate}
              onChange={(e) => handleInputChange("startDate", e)}
              customInput={
                <CalendarButton>
                  <CalendarIcon />
                  Due Date
                </CalendarButton>
              }
            />
          </FlexContainer>
          {loadingMutation && (
            <ModalAlert>
              <LoadingIcon width={"24px"} />
              <p>Loading, please wait...</p>
            </ModalAlert>
          )}
          {errorMutation && (
            <ModalAlert>
              <p>An error occured, try again</p>
            </ModalAlert>
          )}
          {!formValid && (
            <ModalAlert>
              <p>Please complete all the fields</p>
            </ModalAlert>
          )}
          <ModalActions>
            <Button bgColor="transparent" onClick={() => setIsOpen(false)}>
              <HeadingText>Cancel</HeadingText>
            </Button>
            <Button onClick={handleAddClick}>
              <HeadingText>Add</HeadingText>
            </Button>
          </ModalActions>
        </ModalContainer>
      </CenteredContainer>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
`;
const CenteredContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ModalContainer = styled.div`
  max-width: 740px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: ${(props) => props.theme.bgLight};
  color: white;
  z-index: 10;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`;

const HeadingText = styled.h6`
  margin: 0;
  padding: 10px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  :focus {
    outline: none;
  }
  color: ${(props) => props.theme.neutral1};
`;

const ModalActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const FlexContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 765px) {
    flex-direction: column;
  }
  gap: 16px;
  align-items: center;
`;
const CalendarButton = styled.button`
  padding: 8px 16px;
  font-weight: 600;
  font-size: 15px;
  border: none;
  background-color: rgba(148, 151, 154, 0.1);
  border-radius: 4px;
  color: white;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  cursor: pointer;
`;
const ModalAlert = styled.div`
  margin: 0 auto;
  padding: 0px 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.bgLight};
  fill: white;
  display: flex;
  gap: 8px;
  color: white;
  svg {
    animation: spin 1s linear infinite;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
export default Modal;
