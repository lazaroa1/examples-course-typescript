import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  right: -1px;
  top: 0;
  margin-top: 77px;
  height: 100%;
  width: 85%;
  background-color: pink;
`;
