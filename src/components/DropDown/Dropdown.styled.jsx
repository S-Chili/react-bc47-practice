import styled from 'styled-components';

export const ContainerDropdown = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
`;

export const Btn = styled.button`
  padding: 10px;
  border: none;
  background-color: white;

  svg {
    margin-right: 20px;
  }

  :hover,
  :focus {
    background-color: lightgray;
  }
`;

export const ActionsBtn = styled.div`
  display: flex;
  justify-content: space-around;
`;
