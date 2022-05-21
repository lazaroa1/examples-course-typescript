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
    name: "Section 2: Using Types",
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
        model: 9,
        modelName: "Using Types in Functions (Parameters and Return)",
      },
      {
        model: 11,
        modelName: "Objects and Types",
      },
      {
        model: 12,
        modelName: "Union Types",
      },
      {
        model: 13,
        modelName: "Checking types",
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
