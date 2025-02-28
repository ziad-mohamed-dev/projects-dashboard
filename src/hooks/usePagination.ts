import { useState } from "react";
import { DataShape } from "../types/dataTypes";

export const usePagination = (items: DataShape[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = itemsPerPage * (currentPage - 1);
  const endIndex = itemsPerPage * currentPage;
  const TotalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < TotalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return { currentPage, TotalPages, currentItems, nextPage, previousPage };
};
