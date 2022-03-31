import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  right: -1px;
  top: 0;
  margin-top: 77px;
  height: 100%;
  width: 80%;
  background-color: #0f0f0f;
  display: flex;
  justify-content: space-between;

  .modules-container {
    margin-top: 10px;
    font-size: 14px;
    color: #bebebe;
  }
`;
