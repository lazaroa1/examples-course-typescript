import { useState } from "react";
import { Container } from "./styles";
import * as c from "./codes";
import BlockCode from "../../components/BlockCode";

export default function SectionTwoTypes() {
  const [age, setAge] = useState<number | string>(0);

  const [numberOne, setNumberOne] = useState<number | string>(0);

  const [numberTwo, setNumberTwo] = useState<number | string>(0);

  const [result, setResult] = useState<number>(0);

  function multiply(numOne: number, numTwo: number): number {
    setResult(numOne * numTwo);
    return result;
  }

  return (
    <Container>
      <h1 className="section-title">Using Types</h1>
      <div className="wrapper">
        <h2>The Basics of Types</h2>
        <BlockCode code={c.typeCode} />
      </div>
      <div className="wrapper">
        <h2>Numeric and Boolean Types</h2>
        <BlockCode code={c.numericBolleanCode} />
      </div>
      <div className="wrapper">
        <h2>Assigning Explicit Types</h2>
        <BlockCode code={c.explicitTypeCode} />
        <div className="mt-3 d-flex">
          <div>
            <label>Type an age:</label>
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="number"
              className="w-75 mr-3"
            />
          </div>
          <p className="mb-2 d-flex align-items-end">Age: {age}</p>
        </div>
      </div>
      <div className="wrapper">
        <h2>Arrays and Types</h2>
        <BlockCode code={c.arrayCode} />
      </div>
      <div className="wrapper">
        <h2>Tuples</h2>
        <BlockCode code={c.tuplesCode} />
      </div>
      <div className="wrapper">
        <h2>Enums</h2>
        <BlockCode code={c.enumCode} />
      </div>
      <div className="wrapper">
        <h2>The 'Any' Type</h2>
        <BlockCode code={c.anyCode} />
      </div>
      <div className="wrapper">
        <h2>Using Types in Functions (Parameters and Return)</h2>
        <BlockCode code={c.functionCode} />
        <div className="mt-3">
          <div className="row mb-2">
            <div className="col">
              <label>First Number:</label>
              <input
                value={numberOne}
                onChange={(e) => setNumberOne(e.target.value)}
                type="number"
              />
            </div>
            <div className="col">
              <label>Second Number:</label>
              <input
                value={numberTwo}
                onChange={(e) => setNumberTwo(e.target.value)}
                type="number"
              />
            </div>
            <div className="col mb-1 d-flex align-items-end justify-content-end">
              <button
                onClick={() => multiply(Number(numberOne), Number(numberTwo))}
              >
                Calculate
              </button>
            </div>
          </div>
          <p>Value: {result}</p>
        </div>
      </div>
      <div className="wrapper">
        <h2>Objects and Types</h2>
        <BlockCode code={c.objectCode} />
      </div>
      <div className="wrapper">
        <h2>Union Types</h2>
        <BlockCode code={c.unionTypesCode} />
      </div>
      <div className="wrapper">
        <h2>Checking types</h2>
        <BlockCode code={c.checkingTypesCode} />
      </div>
    </Container>
  );
}
