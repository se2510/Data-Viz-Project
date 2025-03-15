import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ChartLineProps {
  data?: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth?: number;
      pointRadius?: number;
      pointBackgroundColor?: string;
      fill?: boolean | object;
    }[];
  };
  options?: any; 
  plugins?: any[]; 
}

const ChartLineFour: React.FC<ChartLineProps> = ({
  data: customData,
  options: customOptions,
  plugins: customPlugins,
}) => {
  const defaultData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
    datasets: [
      {
        label: "IRPF",
        data: [10, 20, 15, 25, 30],
        backgroundColor: "#bddbe8",
        borderColor: "#bddbe8",
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: "#bddbe8",
        tension: 0.5,
        fill: false,
      },
      {
        label: "IVA",
        data: [0, 30, 20, 5, 35],
        backgroundColor: "#2c8769",
        borderColor: "#2c8769",
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: "#2c8769",
        tension: 0.4, 
        fill: true, 
      },
      {
        label: "ITP",
        data: [15, 25, 20, 20, 40],
        backgroundColor: "#00cc00",
        borderColor: "#00cc00",
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: "#00cc00",
        tension: 0.3, 
        fill: true, 
      },
    ],
  };

  const defaultOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Gráfico de Líneas con Área Rellenada',
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
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

  const data = customData || defaultData;
  const options = { ...defaultOptions, ...customOptions };
  const plugins = customPlugins || [];

  return (
    <div>
      <Line
        data={data}
        options={options}
        plugins={plugins}
      />
    </div>
  );
};

export default ChartLineFour;