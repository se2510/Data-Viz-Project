import Chart from "react-apexcharts";

const ApexChartsInicio = () => {
  const options = {
    chart: {
      type: "bar" as const,
    },
    xaxis: {
      categories: ["Ene", "Feb", "Mar", "Abr", "May"],
    },
  };

  const series = [
    {
      name: "Ventas",
      data: [10, 20, 15, 25, 30],
    },
  ];

  return (
    <div className="">
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  )
}

export default ApexChartsInicio;
