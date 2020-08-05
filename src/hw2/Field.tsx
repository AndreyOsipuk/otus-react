import React, { FC } from "react";
import styled from "@emotion/styled";

import { Cell } from "./Cell";

export interface Props {
  field: string[][];
}

const FieldWrapper = styled.div`
  display: inline-block;
  padding: 10px;
  border: 2px solid lightgray;
`;

export const Field: FC<Props> = ({ field }) => (
  <FieldWrapper>
    {field?.map((row, y: number) => [
      ...row?.map((filled: string, x: number) => (
        <Cell key={`${x}_${y}`}>{filled}</Cell>
      )),
      y !== row.length - 1 ? <br key={y} /> : null,
    ])}
  </FieldWrapper>
);
