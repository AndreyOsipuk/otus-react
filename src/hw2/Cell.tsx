import React, { FC, useState, useEffect } from "react";
//css
import { CellItem } from "./CellItems";

export interface CellProps {
  children?: string;

}

export const Cell: FC<CellProps> = ({ children }) => {
  const [isFilled, setisFilled] = useState<boolean>(false);

  return (
    <CellItem
      isFilled={isFilled}
      onClick={() => setisFilled(!isFilled)}
    >
      {!isFilled && children}
    </CellItem>
  );
};
