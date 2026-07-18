import { Link } from "react-router-dom";

const actions = [
  {
    title: "Add Product",
    path: "/admin/products",
  },
  {
    title: "Upload Gallery",
    path: "/admin/gallery",
  },
  {
    title: "View Inquiries",
    path: "/admin/inquiries",
  },
  {
    title: "Subscribers",
    path: "/admin/subscribers",
  },
];

const QuickActions = () => {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">

      <h2 className="text-2xl font-bold text-white mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {actions.map((item) => (

          <Link
            key={item.title}
            to={item.path}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 rounded-xl text-center transition"
          >
            {item.title}
          </Link>

        ))}

      </div>

    </div>
  );
};

export default QuickActions;