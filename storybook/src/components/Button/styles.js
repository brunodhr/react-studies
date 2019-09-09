import styled from 'styled-components';

export const CustomButton = styled.button`
  cursor: pointer;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  border: 1px solid red;
  color: red;
  &:hover {
    border-color: blue;
    color: blue;
  }
`;
