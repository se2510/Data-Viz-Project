import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartPieThree = () => {
  return (
    <div>
      <Doughnut
        data={{
          labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
          datasets: [
            {
              label: "IRPF",
              data: [10, 20, 15, 25, 30],
              backgroundColor: ["#5E00CF", "#4B00A8", "#3A007F", "#2A0059", "#1A0033"],
              borderColor: "#5E00CF",
              borderWidth: 1,
            },
            {
              label: "IVA",
              data: [5, 15, 10, 20, 25],
              backgroundColor: ["#FDCC0D", "#E6B800", "#CCA300", "#B38F00", "#997A00"],
              borderColor: "#FDCC0D",
              borderWidth: 1,
            },
            {
              label: "ITP",
              data: [5, 15, 10, 20, 25],
              backgroundColor: ["#FFFF9F", "#E6E68F", "#CCCC7F", "#B3B36F", "#99995F"],
              borderColor: "#FFFF9F",
              borderWidth: 1,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: { position: "top" },
            title: { display: true, text: "Impuestos Mensuales" },
          },
        }}
      />
    </div>
  );
};

export default ChartPieThree;