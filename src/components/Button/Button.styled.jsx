import styled from "styled-components";

export const StyledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;
  background-color: #ff6b0a;
  margin: 10px 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.71;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  transition: all 250ms linear;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #c05209;
  }`