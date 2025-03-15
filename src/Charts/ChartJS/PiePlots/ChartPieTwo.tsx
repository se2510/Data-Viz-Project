import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartPieTwo = () => {
  return (
    <div>
      <Pie
        data={{
          labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
          datasets: [
            {
              label: "Ganancias",
              data: [10, 20, 15, 25, 30],
              backgroundColor: [
                "#FF5733",
                "#FFC300",
                "#33FF57",
                "#3357FF",
                "#C70039",
              ],
              borderColor: [
                "#FF5733",
                "#FFC300",
                "#33FF57",
                "#3357FF",
                "#C70039",
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: { position: "top" },
            title: { display: true, text: "Ganancias Mensuales" },
          },
        }}
      />
    </div>
  );
};

export default ChartPieTwo;