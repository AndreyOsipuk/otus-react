import React from "react";
import ReactDom from "react-dom";
import { Field } from "./hw2/Field";

const field: string[][] = [
  ["3", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];

const onClick = (x: number, y: number) => {
  field[y].splice(x, 1);
  ReactDom.render(
    <Field field={field} onClick={onClick} />,
    document.getElementById("root")
  );
};

ReactDom.render(
  <Field field={field} onClick={onClick} />,
  document.getElementById("root")
);
