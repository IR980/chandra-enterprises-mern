import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const ProductAvailabilityChart = ({ productAvailability }) => {
  const data = [
    {
      name: "Available",
      value: productAvailability?.available || 0,
    },
    {
      name: "Out of Stock",
      value: productAvailability?.outOfStock || 0,
    },
    {
      name: "Coming Soon",
      value: productAvailability?.comingSoon || 0,
    },
  ];

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">
        Product Availability
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

          <XAxis dataKey="name" stroke="#CBD5E1" />

          <YAxis stroke="#CBD5E1" />

          <Tooltip />

          <Bar dataKey="value" fill="#3B82F6" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductAvailabilityChart;
