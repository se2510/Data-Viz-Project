import React from "react";
import Chart from "react-apexcharts";

const ApexBarFour: React.FC = () => {
  const options = {
    series: [
      {
        name: "Product A",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "Product B",
        data: [20, 30, 40, 80, 60, 50, 90, 100],
      },
    ],
    chart: {
      type: "bar",
      height: 400,
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        dataLabels: {
          position: "top",
        },
      },
    },
    colors: ["#008FFB", "#FF4560"],
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#333"],
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    },
    legend: {
      position: "top",
    },
    tooltip: {
      enabled: true,
    },
  };

  return (
    <div>
      <Chart options={options} series={options.series} type="bar" height={400} />
    </div>
  );
};

export default ApexBarFour;