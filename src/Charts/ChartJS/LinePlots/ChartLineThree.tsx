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

const ChartLineThree = () => {
  return (
    <div>
        <Line
            data={{
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
                datasets: [
                    {
                        label: "IRPF",
                        data: [10, 20, 15, 25, 30],
                        backgroundColor: "#5E00CF",
                        borderColor: "#5E00CF",
                    },
                    {
                        label: "IVA",
                        data: [5, 15, 10, 20, 25],
                        backgroundColor: "#FDCC0D",
                        borderColor: "#FDCC0D",
                    },
                    {
                        label: "ITP",
                        data: [0, 10, 15, 20, 35],
                        backgroundColor: "#FFFF9F",
                        borderColor: "#FFFF9F",
                    },
                ]
            }}
        />
    </div>
  )
}

export default ChartLineThree;