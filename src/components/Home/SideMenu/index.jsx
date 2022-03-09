import { Container, ArrowDownIcon } from "./styles";

export default function SideMenu() {
  return (
    <Container>
      <ul className="list-container">
        <li className="section">
          <b>Secao 1</b>
          <ArrowDownIcon />
        </li>
        <li className="module">
          <p>modulo</p>
          <p>modulo</p>
        </li>
      </ul>
    </Container>
  );
}
