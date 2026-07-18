import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#8B5CF6", "#10B981"];

const GalleryAnalytics = ({ galleryAnalytics }) => {
  const data = [
    {
      name: "Images",
      value: galleryAnalytics?.images || 0,
    },
    {
      name: "Videos",
      value: galleryAnalytics?.videos || 0,
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Gallery Analytics</h2>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={100}
            paddingAngle={4}
            label
          >
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />

          <Legend />
        </PieChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-slate-800 rounded-xl p-4 text-center">
          <p className="text-gray-400 text-sm">Images</p>

          <h3 className="text-3xl font-bold text-purple-400 mt-2">
            {galleryAnalytics?.images || 0}
          </h3>
        </div>

        <div className="bg-slate-800 rounded-xl p-4 text-center">
          <p className="text-gray-400 text-sm">Videos</p>

          <h3 className="text-3xl font-bold text-green-400 mt-2">
            {galleryAnalytics?.videos || 0}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default GalleryAnalytics;
