import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const CarbonChart = ({ data }) => (
  <LineChart width={600} height={300} data={data}>
    <XAxis dataKey="time" />
    <YAxis />
    <Tooltip />
    <CartesianGrid stroke="#eee" />
    <Line type="monotone" dataKey="korea" stroke="#82ca9d" />
    <Line type="monotone" dataKey="us" stroke="#8884d8" />
  </LineChart>
);

export default CarbonChart;
