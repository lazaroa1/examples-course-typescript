import React from "react";
import SectionTwoTypes from "../pages/SectionTwoTypes";
import SectionThreeEcmascript from "../pages/SectionThreeEcmascript";
import SectionFiveObjects from "../pages/SectionFiveObjects";

interface Modules {
  model?: number;
  modelName?: string;
}

interface Values {
  path: string;
  name: string;
  component: React.ElementType;
  modules: Modules[];
  exact?: boolean;
}

export const routes: Array<Values> = [
  {
    path: "/",
    name: "Seção 2: Usando Tipos",
    component: SectionTwoTypes,
    modules: [
      {
        model: 1,
        modelName: "The Basics of Types",
      },
      {
        model: 2,
        modelName: "Numeric and Boolean Types",
      },
      {
        model: 3,
        modelName: "Assigning Explicit Types",
      },
      {
        model: 4,
        modelName: "Arrays and Types",
      },
      {
        model: 5,
        modelName: "Tuples",
      },
      {
        model: 6,
        modelName: "Enums",
      },
      {
        model: 7,
        modelName: "The 'Any' Type",
      },
      {
        model: 8,
        modelName: "Generated JavaScript Code",
      },
      {
        model: 9,
        modelName: "Using Types in Functions (Parameters and Return)",
      },
      {
        model: 10,
        modelName: "Functions As Types",
      },
      {
        model: 11,
        modelName: "Objects and Types",
      },
      {
        model: 12,
        modelName: "Object Type Challenge",
      },
      {
        model: 13,
        modelName: "Object Type Challenge - Answer",
      },
      {
        model: 14,
        modelName: "Defining Custom Types (Alias)",
      },
      {
        model: 15,
        modelName: "Multiple Types with Union Types",
      },
      {
        model: 16,
        modelName: "Creating Types in Runtime",
      },
      {
        model: 17,
        modelName: "The 'Never' Type",
      },
      {
        model: 18,
        modelName: "Optional Values with Type 'Null'",
      },
      {
        model: 19,
        modelName: "Challenge: Transform JS Code into TS",
      },
      {
        model: 20,
        modelName: "Challenge: Transform JS Code into TS - Answer",
      },
    ],
    exact: true,
  },
  {
    path: "/section-3-ECMAScript",
    name: "Seção 3: TypeScript e os Novos Recursos ECMAScript",
    component: SectionThreeEcmascript,
    modules: [],
  },
  {
    path: "/section-5-objects",
    name: "Seção 5: Usando classes para Criar Objetos",
    component: SectionFiveObjects,
    modules: [],
  },
];
