import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 1px;
  left: 0;
  height: 100%;
  width: 15%;
  background-color: #181818;
  margin-top: 76px;
  border-right: 1px solid;
  border-color: #757575;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 0;

  .list-container {
    padding: 0;
    list-style-type: none;

    .section {
      font-size: 20px;
      color: #bebebe;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
  }
`;
