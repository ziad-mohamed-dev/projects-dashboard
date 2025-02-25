import { FaSortDown, FaSortUp } from "react-icons/fa";
import { SortConfig } from "../../types/useTableTypes";

interface TableHeadProps {
  handleSort: (column: SortConfig["sortBy"]) => void;
  sortConfig: SortConfig;
}

const TableHead = ({ handleSort, sortConfig }: TableHeadProps) => {
  const columns: { label: string; sortKey: SortConfig["sortBy"] }[] = [
    { label: "Name", sortKey: "client" },
    { label: "Country", sortKey: "country" },
    { label: "Email", sortKey: "email" },
    { label: "Project Name", sortKey: "project" },
    { label: "Task Progress", sortKey: "progress" },
    { label: "Status", sortKey: "status" },
    { label: "Date", sortKey: "date" },
  ];

  return (
    <thead>
      <tr className="border border-gray-700 [&>_*]:px-4 [&>*]:py-3">
        <th>Image</th>
        {columns.map(({ label: label, sortKey: columnConfig }, i) => (
          <th key={i} onClick={() => handleSort(columnConfig)}>
            <div className="flex items-center justify-center gap-1 m-auto w-fit cursor-pointer">
              {sortConfig.sortBy === columnConfig &&
                (sortConfig.order === "asc" ? <FaSortUp /> : <FaSortDown />)}
              <span>{label}</span>
            </div>
          </th>
        ))}
        <th>Actions</th>
      </tr>
    </thead>
  );
};

export default TableHead;
