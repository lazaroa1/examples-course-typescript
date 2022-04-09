import { Container } from "./styles";
import BlockCode from "../../components/BlockCode";

export default function SectionTwoTypes() {
  let name: string = "Lázaro";

  return (
    <Container>
      <h1 className="section-title">Using Types</h1>
      <div className="wrapper">
        <p className="option-title">The Basics of Types</p>
        <BlockCode code={'let name: string = "Lázaro"'} />
        <p className="exemplo">{name}</p>
      </div>
    </Container>
  );
}
