import { ChangeEvent } from "react";
import { SearchQueryType } from "../../types/useTableTypes";

interface FilterInputsProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<SearchQueryType>>;
}

const FilterInputs = ({ setSearchQuery }: FilterInputsProps) => {
  const searchFields: {
    label: string;
    queryKey: keyof SearchQueryType;
  }[] = [
    { label: "name", queryKey: "client" },
    { label: "country", queryKey: "country" },
    { label: "email", queryKey: "email" },
    { label: "project", queryKey: "project" },
    { label: "date", queryKey: "date" },
  ];

  const handleQueryInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    queryKey: keyof SearchQueryType
  ) => {
    setSearchQuery((prev) => ({
      ...prev,
      [queryKey]: e.target.value,
    }));
  };

  return (
    <>
      {searchFields.map(({ label: label, queryKey: queryKey }, i) => (
        <div key={i}>
          <label htmlFor={label} className="capitalize">
            {label}:
          </label>
          <input
            id={label}
            type="text"
            className="outline-none bg-gray-900 p-1 rounded-md"
            onChange={(e) => handleQueryInputChange(e, queryKey)}
          />
        </div>
      ))}
    </>
  );
};

export default FilterInputs;
