import Chart from "react-apexcharts";

const ApexBarOne: React.FC = () => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      height: 440,
      stacked: true,
    },
    colors: ["#008FFB", "#FF4560"],
    plotOptions: {
      bar: {
        borderRadius: 5,
        borderRadiusApplication: "end", 
        borderRadiusWhenStacked: "all",
        horizontal: true,
        barHeight: "80%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    tooltip: {
      shared: false,
      y: {
        formatter: (val) => Math.abs(val) + "%",
      },
    },
    title: {
      text: "Mauritius population pyramid 2011",
    },
    xaxis: {
      categories: [
        "85+",
        "80-84",
        "75-79",
        "70-74",
        "65-69",
        "60-64",
        "55-59",
        "50-54",
        "45-49",
        "40-44",
        "35-39",
        "30-34",
        "25-29",
        "20-24",
        "15-19",
        "10-14",
        "5-9",
        "0-4",
      ],
      title: {
        text: "Percent",
      },
      labels: {
        formatter: (val) => Math.abs(Math.round(Number(val))) + "%",
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "5px", 
        },
      },
    },
  };

  const series = [
    {
      name: "Males",
      data: [
        0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
        3.9, 3.5, 3,
      ],
    },
    {
      name: "Females",
      data: [
        -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
        -4.1, -4, -4.1, -3.4, -3.1, -2.8,
      ],
    },
  ];

  return (
    <div
      className="chart-container"
    >
      <Chart options={options} series={series} type="bar" height={280} />
    </div>
  );
};

export default ApexBarOne;
