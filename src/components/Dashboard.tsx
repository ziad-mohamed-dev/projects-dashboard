import SidebarMenu from "./SidebarMenu";
import Table from "./Table/Table";

const Dashboard = () => {
  return (
    <div className="h-dvh bg-gray-900 text-white flex">
      <SidebarMenu />
      <div className="overflow-auto h-full flex-grow-1 p-4">
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
