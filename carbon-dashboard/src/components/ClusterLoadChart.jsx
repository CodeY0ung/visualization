import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ClusterLoadChart = ({ data }) => (
  <BarChart width={600} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="cluster" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="jobCount" fill="#8884d8" />
  </BarChart>
);

export default ClusterLoadChart;
