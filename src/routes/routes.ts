import React from "react";
import SectionTwoTypes from "../pages/SectionTwoTypes";
import SectionThreeEcmascript from "../pages/SectionThreeEcmascript";
import SectionFiveObjects from "../pages/SectionFiveObjects";

interface Values {
  path: string;
  name: string;
  component: React.ElementType;
  options: [];
  exact?: boolean;
}

export const routes: Array<Values> = [
  {
    path: "/",
    name: "Seção 2: Usando Tipos",
    component: SectionTwoTypes,
    options: [],
    exact: true,
  },
  {
    path: "/section-3-ECMAScript",
    name: "Seção 3: TypeScript e os Novos Recursos ECMAScript",
    component: SectionThreeEcmascript,
    options: [],
  },
  {
    path: "/section-5-objects",
    name: "Seção 5: Usando classes para Criar Objetos",
    component: SectionFiveObjects,
    options: [],
  },
];
