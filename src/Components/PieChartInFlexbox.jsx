import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./skill.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import data from "./Chart.js";
const margin = {
  top: 30,
  right: 40,
  left: 30,
  bottom: 5,
};
// #endregion

export default function PieChartInFlexbox() {
  return (
    <div className="mb-lg-2">
      <br />
      <br />
      <h2 style={{ color: "#42e1f6", textAlign: "center", padding: "1rem" }}>
        Skills Chart
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "70vh",
          alignItems: "center",
        }}
        className="chart"
      >
        <br />{" "}
        <BarChart
          width={800}
          height={500}
          data={data}
          margin={margin}
          style={{ backgroundColor: "white" }}
        >
          <XAxis dataKey="name" stroke="#111111" />
          <YAxis />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
          <Legend
            width={100}
            wrapperStyle={{
              top: 20,
              right: 20,
              backgroundColor: "#ffffff",
              border: "1px solid #d5d5d5",
              borderRadius: 3,
              lineHeight: "40px",
            }}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="uv" fill="#111111" barSize={25} />
        </BarChart>
      </div>
    </div>
  );
}
