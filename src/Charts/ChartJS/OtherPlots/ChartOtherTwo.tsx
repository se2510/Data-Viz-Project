import React from 'react';
import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
  datasets: [
    {
      type: 'bar',
      label: 'Ventas',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      type: 'line',
      label: 'Gastos',
      data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      fill: true,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Multigráfica: Ventas y Gastos',
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Meses',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Valores',
      },
      beginAtZero: true,
    },
  },
};

const ChartOtherTwo: React.FC = () => {
  return (
    <div>
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

export default ChartOtherTwo;