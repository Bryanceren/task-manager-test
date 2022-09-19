import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "./Button";

const CustomSelect = ({
  label,
  options,
  onChange,
  icon,
  multiple,
  itemvalue,
  itemtext,
}) => {
  const [currentValue, setCurrentValue] = useState("");
  const [currentMultipleValues, setCurrentMultipleValues] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleValueChange = (value) => {
    multiple
      ? setCurrentMultipleValues((currentValue) => [...currentValue, value])
      : setCurrentValue(value);
  };

  const handleChange = (value) => {
    handleValueChange(value);
    // call method, if it exists
    if (onChange)
      multiple ? onChange([...currentMultipleValues, value]) : onChange(value);
    // close, after all tasks are finished
    if (!multiple) {
      handleClose();
    }
  };

  const getLabel = () => {
    if (multiple) return `${label} ${currentMultipleValues.length}`;
    if (!currentValue) return label;
    if (itemtext) return currentValue[itemtext];
    return currentValue;
  };

  const isActive = (item) => {
    return multiple
      ? currentMultipleValues.includes(itemvalue ? item.itemvalue : item)
      : (itemvalue ? item.itemvalue : item) === currentValue;
  };

  const clearHandler = (e) => {
    multiple ? setCurrentMultipleValues([]) : setCurrentValue(null);
  };

  return (
    <SelectContainer>
      <SelectLabelButton onClick={handleOpen}>
        {icon}
        {getLabel()}
      </SelectLabelButton>
      <DropdownStyle isVisible={open}>
        <FlexWrapper>
          <Button onClick={clearHandler}>Clear</Button>
          <Button
            onClick={() => {
              handleClose();
            }}
          >
            x
          </Button>
        </FlexWrapper>
        <p>{label}</p>
        {options.length === 0 ? (
          <p>No data available</p>
        ) : (
          options.map((item, index) => (
            <DropdownItem
              onClick={() => handleChange(item)}
              active={isActive(item)}
              key={index}
            >
              {itemtext ? item[itemtext] : item}
            </DropdownItem>
          ))
        )}
      </DropdownStyle>
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  position: relative;
  margin: 0;
`;
const SelectLabelButton = styled.button`
  padding: 8px 16px;
  min-width: 7rem;
  svg {
    fill: white;
  }
  font-weight: 600;
  font-size: 15px;
  background-color: rgba(148, 151, 154, 0.1);
  border: none;
  border-radius: 4px;
  color: white;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;
const DropdownStyle = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  left: 0;
  max-height: 40vmax;
  min-width: 10rem;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: ${(props) => props.theme.bgLight};
  border: ${(props) => props.theme.neutral1} 1px solid;
  transition: max-height 0.2s ease;
  p {
    font-weight: 600;
    color: ${(props) => props.theme.neutral1};
  }
  ${(p) =>
    p.isVisible !== true &&
    css`
      max-height: 40px;
      visibility: hidden;
    `}
`;
const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  padding: 6px;
  font-weight: 600;
  color: white;
  border-radius: 0.3rem;
  background-color: ${(props) =>
    props.active ? props.theme.neutral1 : "transparent"};
  cursor: pointer;
  &:hover,
  :focus,
  :focus:hover {
    background-color: ${(props) => props.theme.neutral1};
    color: ${(props) => props.theme.bgMain};
    outline: none;
  }
`;
const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default CustomSelect;
