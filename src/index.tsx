import React from "react";
import ReactDom from "react-dom";
import { Field } from "./hw2/Field";

const field: string[][] = [
  ["3", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];

ReactDom.render(<Field field={field} />, document.getElementById("root"));
