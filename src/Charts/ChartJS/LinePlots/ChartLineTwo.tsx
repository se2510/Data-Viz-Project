import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement, 
    LineElement, 
    Title,
    Tooltip,
    Legend
);

const ChartLineTwo = () => {
  return (
    <div>
        <Line
            data={{
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
                datasets: [
                    {
                        label: "Ganancias",
                        data: [10, 20, 15, 25, 30],
                        backgroundColor: "#FF5733",
                        borderColor: "#FF5733",
                    },
                    {
                        label: "Gastos",
                        data: [5, 15, 10, 20, 25],
                        backgroundColor: "#33FF57",
                        borderColor: "#33FF57",
                    },
                ]
            }}
        />
    </div>
  )
}

export default ChartLineTwo