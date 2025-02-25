import { useState } from "react";
import { BsFilterLeft } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import FilterInputs from "./FilterInputs";
import { SearchQueryType } from "../../types/useTableTypes";
import StatusButtons from "./StatusButtons.tsx";

interface TableFiltersProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<SearchQueryType>>;
}

const TableFilters = ({ setSearchQuery }: TableFiltersProps) => {
  const [isFiltersVisible, setIsFiltersVisible] = useState<boolean>(false);

  return (
    <div className="mb-4 w-fit">
      <div className="relative">
        <button
          className="cursor-pointer border border-gray-700 p-2 rounded flex items-center gap-1"
          onClick={() => setIsFiltersVisible((prev) => !prev)}
        >
          <BsFilterLeft />
          <span>Filter</span>
          {isFiltersVisible ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
        {isFiltersVisible && (
          <div className="absolute top-[calc(100%+0.5rem)] left-0 p-3 rounded border bg-gray-800 border-gray-700">
            <FilterInputs setSearchQuery={setSearchQuery} />
            <StatusButtons setSearchQuery={setSearchQuery} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TableFilters;
