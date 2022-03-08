import styled from "styled-components";
import { SiGithub, SiTypescript, SiReact } from "react-icons/si";

export const Container = styled.div`
  background-color: #2a2929;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 76px;
  display: flex;
  align-items: center;
  padding: 0 25px;
  border-bottom: 1px solid;
  border-color: #757575;

  .icon-container {
    width: 50%;
  }

  .right-container {
    width: 50%;
    display: flex;
    justify-content: end;
  }

  .git-button {
    background-color: #2a2929;
    border: 1px solid;
    border-color: #757575;
    height: 25px;
    width: 25px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #757575;

    :active {
      border-color: #a3a3a3;
      color: #a3a3a3;
    }
  }
`;

export const TypeScriptIcon = styled(SiTypescript)`
  color: #757575;
  width: 40px;
  height: 40px;
`;

export const ReactIcon = styled(SiReact)`
  color: #757575;
  width: 40px;
  height: 40px;
  margin-left: 10px;
`;

export const GitHubIcon = styled(SiGithub)`
  width: 20px;
  height: 20px;
`;
