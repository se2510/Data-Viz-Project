import React, { useState } from "react";
import Chart from "react-apexcharts";

const ApexBarTwo: React.FC = () => {
  const [chartData] = useState({
    options: {
      chart: {
        id: "basic-bar",
        background: "#1e1e1e", // Fondo oscuro
        foreColor: "#fff", // Color del texto en blanco
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
      colors: ["#00E396"], // Cambia el color de las barras
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false,
        },
      },
      tooltip: {
        theme: "dark", // Hace que el tooltip también sea oscuro
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
      },
    ],
  });

  return (
    <div className="app" style={{ backgroundColor: "#121212", padding: "20px", borderRadius: "10px" }}>
      <div className="row">
        <div className="mixed-chart">
          <Chart options={chartData.options} series={chartData.series} type="bar" height="250" />
        </div>
      </div>
    </div>
  );
};

export default ApexBarTwo;
