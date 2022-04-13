import { Container } from "./styles";
import BlockCode from "../../components/BlockCode";

export default function SectionTwoTypes() {
  const typeCode = `let name: string = "Lázaro"\n//Output value: Lázaro`;

  const NumericBolleanCode = `//Numeric\nlet age: number = 24\n//Output value: 24\n\n//Boolean\nlet hasHobbies: boolean = false\n//Output value: false`;

  const ExplicitTypeCode = `let myAge: number\nmyAge = 25\nOutput value: 25`;

  return (
    <Container>
      <h1 className="section-title">Using Types</h1>
      <div className="wrapper">
        <h2>The Basics of Types</h2>
        <BlockCode code={typeCode} />
      </div>
      <div className="wrapper">
        <h2>Numeric and Boolean Types</h2>
        <BlockCode code={NumericBolleanCode} />
      </div>
      <div className="wrapper">
        <h2>Assigning Explicit Types</h2>
        <BlockCode code={ExplicitTypeCode} />
      </div>
    </Container>
  );
}
