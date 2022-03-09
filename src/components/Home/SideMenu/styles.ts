import styled from "styled-components";
import { GoChevronDown } from "react-icons/go";

interface ContainerProps {}

interface ContainerIcons {}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 300px;
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
      font-size: 32px;
      color: #bebebe;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }

    .module {
      font-size: 24px;
      color: #bebebe;
      margin-left: 15px;
      padding-left: 10px;
      border-left: 1px solid #757575;
      > p {
        margin: 0;
      }
    }
  }
`;

export const ArrowDownIcon = styled(GoChevronDown)<ContainerIcons>`
  height: 25px;
  width: 15px;
  margin-left: 10px;
`;
