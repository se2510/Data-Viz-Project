import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartBarTwo = () => {
  return (
    <div>
        <Bar
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

export default ChartBarTwo