import { data } from "../../db/data";
import TableRowItem from "./TableRow";
import TableHead from "./TableHead";
import { useTable } from "../../hooks/useTable";
import TableFilters from "./TableFilters";
import { usePagination } from "../../hooks/usePagination";

const Table = () => {
  const { filteredData, setSearchQuery, handleSort, sortConfig } =
    useTable(data);

  const { TotalPages, currentItems, currentPage, nextPage, previousPage } =
    usePagination(filteredData, 5);

  return (
    <div className="w-fit p-4">
      <TableFilters setSearchQuery={setSearchQuery} />
      <table className="w-full text-center text-nowrap">
        <TableHead handleSort={handleSort} sortConfig={sortConfig} />
        <tbody className="">
          {currentItems.map((item, i) => (
            <TableRowItem key={i} item={item} />
          ))}
        </tbody>
      </table>
      <div className="flex justify-end items-center mt-4 gap-2 w-full">
        <button
          disabled={currentPage === 1}
          onClick={previousPage}
          className="px-4 py-2 bg-gray-700 not-disabled:hover:bg-gray-800 rounded  disabled:opacity-50 cursor-pointer"
        >
          Previous
        </button>
        <span>
          {currentPage} of {TotalPages}
        </span>
        <button
          disabled={currentPage >= TotalPages}
          onClick={nextPage}
          className="px-4 py-2 bg-gray-700 not-disabled:hover:bg-gray-800 rounded disabled:opacity-50 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
