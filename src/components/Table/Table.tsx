import { data } from "../../db/data";
import TableRowItem from "./TableRow";
import TableHead from "./TableHead";
import { useTable } from "../../hooks/useTable";
import TableFilters from "./TableFilters";

const Table = () => {
  const { filteredData, setSearchQuery, handleSort, sortConfig } =
    useTable(data);

  return (
    <>
      <TableFilters setSearchQuery={setSearchQuery} />
      <table className="w-full border border-gray-700 text-center text-nowrap">
        <TableHead handleSort={handleSort} sortConfig={sortConfig} />
        <tbody className="">
          {filteredData.map((item, i) => (
            <TableRowItem key={i} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
