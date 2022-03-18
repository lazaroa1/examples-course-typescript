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
    name: "AAAAAAA",
    component: Aa,
    options: [],
    exact: true,
  },
  {
    path: "/bb",
    name: "BBBBBB",
    component: Bb,
    options: [],
  },
];
