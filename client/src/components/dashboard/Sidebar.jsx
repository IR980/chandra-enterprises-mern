import {
  LayoutDashboard,
  Package,
  Image,
  MessageSquare,
  Users,
  FileText,
  Settings,
  CreditCard,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin/dashboard",
  },
  {
    name: "Products",
    icon: Package,
    path: "/admin/products",
  },
  {
    name: "Gallery",
    icon: Image,
    path: "/admin/gallery",
  },
  {
    name: "Inquiries",
    icon: MessageSquare,
    path: "/admin/inquiries",
  },
  {
    name: "Subscribers",
    icon: Users,
    path: "/admin/subscribers",
  },
  {
    name: "Catalogue",
    icon: FileText,
    path: "/admin/catalogue",
  },
  {
    name: "Payment",
    icon: CreditCard,
    path: "/admin/payment",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/admin/settings",
  },
];
const Sidebar = () => {
  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    toast.success("Logged out successfully");

    navigate("/admin/login", {
      replace: true,
    });
  };

  return (
    <aside className="w-72 h-screen bg-slate-900 border-r border-slate-800 flex flex-col">
      {/* Logo */}
      <div className="h-20 flex items-center justify-center border-b border-slate-800">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-yellow-400">Chandra</h1>

          <p className="text-sm text-slate-400">Enterprises</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  end={item.path === "/admin/dashboard"}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-yellow-400 text-black font-semibold"
                        : "text-slate-300 hover:bg-slate-800 hover:text-yellow-400"
                    }`
                  }
                >
                  <Icon size={22} />
                  <span>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-slate-800">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
