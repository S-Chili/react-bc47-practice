import styled from 'styled-components';

export const List = styled.ul`
display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`
export const Item = styled.li`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: white;
`;
export const BtnMenu = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
  width: 32px;
  height: 32px;

  :hover,
  :focus {
    border-radius: 50%;
    background-color: lightgray;
  }
`;
