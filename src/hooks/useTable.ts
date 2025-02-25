import { useState } from "react";
import { DataShape } from "../types/dataTypes";
import { SearchQueryType, SortConfig } from "../types/useTableTypes";

export const useTable = (initialData: DataShape[]) => {
  const [searchQuery, setSearchQuery] = useState<SearchQueryType>({});

  const [sortConfig, setSortConfig] = useState<SortConfig>({
    sortBy: "client",
    order: "asc",
  });

  const searchQueryKeys = Object.keys(searchQuery) as (keyof SearchQueryType)[];

  const filteredData: DataShape[] = initialData.filter((item) =>
    searchQueryKeys.every((key) => {
      if (searchQuery[key]) {
        const searchValue = searchQuery[key].toLowerCase();
        return item[key].toLowerCase().includes(searchValue);
      }
      return true;
    })
  );

  filteredData.sort((a, b) => {
    let valueA: string | number;
    let valueB: string | number;

    if (sortConfig.sortBy === "progress") {
      valueA = parseFloat(a.progress.replace("%", ""));
      valueB = parseFloat(b.progress.replace("%", ""));
    } else if (sortConfig.sortBy === "date") {
      valueA = new Date(a.date).getTime();
      valueB = new Date(b.date).getTime();
    } else {
      valueA = a[sortConfig.sortBy].toLowerCase();
      valueB = b[sortConfig.sortBy].toLowerCase();
    }

    if (sortConfig.order === "asc") {
      return valueA > valueB ? 1 : -1;
    } else if (sortConfig.order === "desc") {
      return valueA > valueB ? -1 : 1;
    }
    return 0;
  });

  const handleSort = (sortBy: SortConfig["sortBy"]) => {
    setSortConfig((prev) => ({
      sortBy,
      order: prev.sortBy === sortBy && prev.order === "asc" ? "desc" : "asc",
    }));
  };

  return { filteredData, setSearchQuery, handleSort, sortConfig };
};
