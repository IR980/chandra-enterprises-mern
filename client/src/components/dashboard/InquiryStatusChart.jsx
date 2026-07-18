import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#facc15", "#3b82f6", "#22c55e"];

const InquiryStatusChart = ({ inquiryStatus }) => {
  const data = [
    {
      name: "Pending",
      value: inquiryStatus?.pending || 0,
    },
    {
      name: "Contacted",
      value: inquiryStatus?.contacted || 0,
    },
    {
      name: "Completed",
      value: inquiryStatus?.completed || 0,
    },
  ];

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Inquiry Status</h2>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={55}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InquiryStatusChart;
