export const typeCode = `let name: string = "Lázaro"\n//Output value: Lázaro`;

export const numericBolleanCode = `//Numeric\nlet age: number = 24\n//Output value: 24\n\n//Boolean\nlet hasHobbies: boolean = false\n//Output value: false`;

export const explicitTypeCode = `let myAge: number\nmyAge = 25`;

export const arrayCode = `let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]\nhobbies[0]\n//Output value: ["Cozinhar"]\n100 hobbies = [100, 200]\n//Output value: [100, 200]`;

export const tuplesCode = `let address: [string, number, string] = ["Av Principal", 90, ""]\n//Output value: ['Av Principal', 90, '']`;

export const enumCode = `enum Color {
  Gray,
  Green = 100,
  Blue = 10,
  Orange,
  Yellow,
  Red = 100
}\nlet myColor: Color = Color.Green\n//Output value: 100\nColor.Blue\n//Output value: 10\nColor.Orange, Color.Red\n//Output value: 11, 100`;

export const anyCode = `let car: any = "BMW"\ncar = {brand: "Mclaren", year: 2000}\n//Output value: {
//   "brand": "Mclaren",
//   "year": 2000
// }`;

export const functionCode = `function multiply(numOne: number, numTwo: number): number {
return numOne * numTwo;
}\nmultiply(2, 2)\n//Output value: 4`;

export const objectCode = `let user: {name: string, age: number} = {
name: "Lazaro",
age: 25
}\n//Output value: {
//  "name": "Lazaro",
//  "age": 25
//}`;

export const unionTypesCode = `let note: number | string = 10;`;

export const checkingTypesCode = `let value = 30
if(typeof value === "number") {
    return "Its a number!"
} else {
    return "It's not a number"
}`;
