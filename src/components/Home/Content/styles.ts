import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  display: flex;
  background-color: #0f0f0f;

  .content {
    padding: 20px;
    color: #f5f6f7;

    .section-title {
      text-align: center;
    }
  }

  .modules-container {
    font-size: 14px;
    color: #ffff;
  }
`;
