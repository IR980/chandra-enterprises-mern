import {
  Bell,
  Search,
  UserCircle2,
} from "lucide-react";

const Topbar = () => {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800">

      <div className="flex items-center justify-between px-8 py-5">

        {/* Left */}
        <div>
          <h1 className="text-2xl font-bold text-white">
            Dashboard
          </h1>

          <p className="text-sm text-slate-400 mt-1">
            Welcome back, Admin 👋
          </p>

          <p className="text-xs text-slate-500 mt-1">
            {today}
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">

          {/* Search */}
          <div className="relative hidden md:block">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search..."
              className="bg-slate-800 text-white pl-11 pr-5 py-3 rounded-xl w-72 border border-slate-700 outline-none focus:border-yellow-400 transition"
            />
          </div>

          {/* Notification */}
          <button className="relative w-12 h-12 rounded-xl bg-slate-800 hover:bg-slate-700 transition flex items-center justify-center">

            <Bell size={20} className="text-white" />

            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full"></span>

          </button>

          {/* Profile */}
          <div className="flex items-center gap-3 bg-slate-800 px-4 py-2 rounded-xl">

            <UserCircle2
              size={40}
              className="text-yellow-400"
            />

            <div className="hidden md:block">
              <h4 className="text-white font-semibold">
                Administrator
              </h4>

              <p className="text-xs text-slate-400">
                Chandra Enterprises
              </p>
            </div>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Topbar;