import { Container, TypeScriptIcon, ReactIcon, GitHubIcon } from "./styles";

export default function Header() {
  return (
    <Container>
      <div className="icon-container">
        <TypeScriptIcon />
        <ReactIcon />
      </div>
      <div className="right-container">
        <a
          href="https://github.com/lazaroa1"
          target="_blank"
          rel="noopener noreferrer"
          className="git-button"
        >
          <GitHubIcon />
        </a>
      </div>
    </Container>
  );
}
