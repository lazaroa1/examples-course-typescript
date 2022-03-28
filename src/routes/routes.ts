import React from "react";
import Aa from "../pages/Aa";
import Bb from "../pages/Bb";

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
    name: "Seção 1: Usando Tipos",
    component: Aa,
    options: [],
    exact: true,
  },
  {
    path: "/bb",
    name: "Seção 2: Entendendo o Compilador TypeScript",
    component: Bb,
    options: [],
  },
];
