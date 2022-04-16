import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  background-color: #181818;
  border-color: #757575;
  height: 100%;
  padding-top: 20px;

  li {
    :hover {
      background-color: #242424;
      border-radius: 5px;
      padding: 12px;
    }
  }

  .list-container {
    list-style-type: none;

    .section {
      font-size: 16px;
      color: #bebebe;
      text-decoration: none;
    }
  }
`;
