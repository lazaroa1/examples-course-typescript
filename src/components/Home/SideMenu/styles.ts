import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 1px;
  left: 0;
  height: 100%;
  width: 20%;
  background-color: #181818;
  margin-top: 76px;
  border-right: 1px solid;
  border-color: #757575;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px 0px;

  li {
    :hover {
      background-color: #242424;
      border-radius: 5px;
    }
    margin: 20px;
    padding: 5px 16px;
  }

  .list-container {
    padding: 0;
    list-style-type: none;

    .section {
      font-size: 16px;
      color: #bebebe;
      text-decoration: none;
    }
  }
`;
