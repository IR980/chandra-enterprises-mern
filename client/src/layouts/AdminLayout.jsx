import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-950">

      <Sidebar />

      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>

    </div>
  );
};

export default AdminLayout;