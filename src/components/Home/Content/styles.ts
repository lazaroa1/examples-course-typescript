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

  .content {
    width: 100%;
    padding: 20px;
    color: #f5f6f7;

    .section-title {
      text-align: center;
    }
  }

  .modules-container {
    width: 30%;
    margin-top: 10px;
    font-size: 14px;
    color: #ffff;
  }
`;
