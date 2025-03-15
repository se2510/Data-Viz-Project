import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
    ArcElement, 
    Tooltip, 
    Legend
);

const ChartPieOne = () => {
  const data = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May"],
    datasets: [
      {
        label: "Ventas",
        data: [10, 20, 15, 25, 30],
        backgroundColor: [
          "rgba(75, 192, 192, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Ventas Mensuales" },
    },
  };

  return <Pie data={data} options={options} />;
};

export default ChartPieOne;