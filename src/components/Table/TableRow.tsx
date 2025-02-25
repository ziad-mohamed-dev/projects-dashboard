import { DataShape } from "../../types/dataTypes";

interface TableRowItemProps {
  item: DataShape;
}

const TableRowItem = ({ item }: TableRowItemProps) => {
  return (
    <tr className="border border-gray-700 [&>*]:px-4 [&>*]:py-3">
      <td>
        <img
          src={item.image}
          alt={item.client}
          className="min-w-12 h-12 rounded-full object-cover"
        />
      </td>
      <td>{item.client}</td>
      <td>{item.country}</td>
      <td>{item.email}</td>
      <td>{item.project}</td>
      <td>
        <div className="w-full h-2 bg-gray-400 rounded-full relative hover:[&_div_div]:block">
          <div
            className="h-full bg-green-400 rounded-full "
            style={{ width: item.progress }}
          >
            <div
              className="hidden absolute bottom-[calc(100%+0.25rem)] bg-gray-800 p-1 rounded -translate-x-1/2"
              style={{ left: item.progress }}
            >
              {item.progress}
            </div>
          </div>
        </div>
      </td>
      <td>
        <span
          className={`${
            item.status === "Completed" ? "bg-green-600" : "bg-yellow-600"
          } p-1 rounded-md`}
        >
          {item.status}
        </span>
      </td>
      <td>{item.date}</td>
      <td>
        <button className="cursor-pointer">...</button>
      </td>
    </tr>
  );
};

export default TableRowItem;
