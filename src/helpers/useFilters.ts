import { useState } from "react";

import { IFilter } from "../interfaces";

export const useFilters = (inititalState: IFilter) => {
  const [filters, setFilters] = useState<IFilter>(inititalState);

  const changeFilter = (key: string, value: number | string | null) => {
    setFilters((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  return { filters, changeFilter };
};
