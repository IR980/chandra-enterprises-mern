import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const SubscriberGrowthChart = ({ subscriberGrowth }) => {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Subscriber Growth</h2>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={subscriberGrowth}>
          <CartesianGrid stroke="#334155" strokeDasharray="3 3" />

          <XAxis dataKey="month" stroke="#CBD5E1" />

          <YAxis stroke="#CBD5E1" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="subscribers"
            stroke="#8B5CF6"
            strokeWidth={4}
            dot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SubscriberGrowthChart;
