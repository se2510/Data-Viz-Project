import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "A", value: 30 },
  { name: "B", value: 80 },
  { name: "C", value: 45 },
  { name: "D", value: 60 },
  { name: "E", value: 20 },
  { name: "F", value: 90 },
  { name: "G", value: 55 }
];

const RechartsInicio = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RechartsInicio;
