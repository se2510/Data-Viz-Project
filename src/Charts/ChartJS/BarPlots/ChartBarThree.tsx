import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Legend);

const ChartBarThree = () => {
  return (
    <div>
        <Bar
            data={{
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
                datasets: [
                    {
                        label: "IRPF",
                        data: [10, 20, 15, 25, 30],
                        backgroundColor: "#5E00CF",
                        borderColor: "#5E00CF",
                        stack: 'true',
                        indexAxis: 'y',
                    },
                    {
                        label: "IVA",
                        data: [5, 15, 10, 20, 25],
                        backgroundColor: "#FDCC0D",
                        borderColor: "#FDCC0D",
                        stack: 'true',
                        indexAxis: 'y',
                    },
                    {
                        label: "ITP",
                        data: [5, 15, 10, 20, 25],
                        backgroundColor: "#FFFF9F",
                        borderColor: "#FFFF9F",
                        stack: 'true',
                        indexAxis: 'y',
                    },
                ]
            }}
        />
    </div>
  )
}

export default ChartBarThree;