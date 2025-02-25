import { SearchQueryType } from "../../types/useTableTypes";

interface StatusButtonsProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<SearchQueryType>>;
}

const StatusButtons = ({ setSearchQuery }: StatusButtonsProps) => {
  const statusButtons: {
    label: string;
    statusValue: SearchQueryType["status"];
    bgColor: string;
  }[] = [
    { label: "All", statusValue: "", bgColor: "bg-gray-500" },
    { label: "Completed", statusValue: "Completed", bgColor: "bg-green-600" },
    {
      label: "In Progress",
      statusValue: "In Progress",
      bgColor: "bg-yellow-600",
    },
  ];

  const handleStatusChange = (statusValue: SearchQueryType["status"]) => {
    setSearchQuery({ status: statusValue });
  };

  return (
    <>
      <label className="capitalize">Status:</label>
      <div className="flex flex-col items-start gap-2">
        {statusButtons.map(({ label: label, statusValue, bgColor }, i) => (
          <button
            key={i}
            className={`p-1 w-1/2 rounded-md border-none outline-none cursor-pointer ${bgColor}`}
            onClick={() => handleStatusChange(statusValue)}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
};

export default StatusButtons;
