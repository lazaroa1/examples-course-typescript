import { useState } from "react";
import { Container } from "./styles";
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

  //passar isso tudo para arquivo de utils
  const typeCode = `let name: string = "Lázaro"\n//Output value: Lázaro`;

  const NumericBolleanCode = `//Numeric\nlet age: number = 24\n//Output value: 24\n\n//Boolean\nlet hasHobbies: boolean = false\n//Output value: false`;

  const ExplicitTypeCode = `let myAge: number\nmyAge = 25`;

  const ArrayCode = `let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]\nhobbies[0]\n//Output value: ["Cozinhar"]\n100 hobbies = [100, 200]\n//Output value: [100, 200]`;

  const TuplesCode = `let address: [string, number, string] = ["Av Principal", 90, ""]\n//Output value: ['Av Principal', 90, '']`;

  const EnumCode = `enum Color {
    Gray,
    Green = 100,
    Blue = 10,
    Orange,
    Yellow,
    Red = 100
}\nlet myColor: Color = Color.Green\n//Output value: 100\nColor.Blue\n//Output value: 10\nColor.Orange, Color.Red\n//Output value: 11, 100`;

  const AnyCode = `let car: any = "BMW"\ncar = {brand: "Mclaren", year: 2000}\n//Output value: {
 //   "brand": "Mclaren",
 //   "year": 2000
 // }`;

  const FunctionCode = `function multiply(numOne: number, numTwo: number): number {
  return numOne * numTwo;
}\nmultiply(2, 2)\n//Output value: 4`;

  const ObjectCode = `let user: {name: string, age: number} = {
  name: "Lazaro",
  age: 25
}\n//Output value: {
//  "name": "Lazaro",
//  "age": 25
//}`;

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
        <BlockCode code={ArrayCode} />
      </div>
      <div className="wrapper">
        <h2>Tuples</h2>
        <BlockCode code={TuplesCode} />
      </div>
      <div className="wrapper">
        <h2>Enums</h2>
        <BlockCode code={EnumCode} />
      </div>
      <div className="wrapper">
        <h2>The 'Any' Type</h2>
        <BlockCode code={AnyCode} />
      </div>
      <div className="wrapper">
        <h2>Using Types in Functions (Parameters and Return)</h2>
        <BlockCode code={FunctionCode} />
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
        <BlockCode code={ObjectCode} />
      </div>
      <div className="wrapper">
        <h2>Arrays and Types</h2>
        <BlockCode code={``} />
      </div>
      <div className="wrapper">
        <h2>Arrays and Types</h2>
        <BlockCode code={``} />
      </div>
      <div className="wrapper">
        <h2>Arrays and Types</h2>
        <BlockCode code={``} />
      </div>
      <div className="wrapper">
        <h2>Arrays and Types</h2>
        <BlockCode code={``} />
      </div>
    </Container>
  );
}
