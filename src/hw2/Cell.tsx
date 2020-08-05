import React, { FC } from "react";
//css
import { CellItem } from "./CellItems";

export interface CellProps {
  children?: string;
  onClick: (x: number, y: number) => void;
  x?: number;
  y?: number;
}

export const Cell: FC<CellProps> = ({ children, x, y, onClick }) => {
  const isFilled = Boolean(children);

  return (
    <CellItem isFilled={isFilled} onClick={() => onClick(x || 0, y || 0)}>
      {children}
    </CellItem>
  );
};
