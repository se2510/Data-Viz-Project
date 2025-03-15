import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartBarFourProps {
  data?: {
      labels: string[];
      datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      stack?: string;
  }[];
  };
  options?: import('chart.js').ChartOptions<'bar'>; 
  plugins?: import('chart.js').Plugin[];
}

const ChartBarFour: React.FC<ChartBarFourProps> = ({
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
        stack: 'Stack 0',
        },
        {
        label: "IVA",
        data: [5, 15, 10, 20, 25],
        backgroundColor: "#2c8769",
        borderColor: "#2c8769",
        stack: 'Stack 1',
        },
        {
        label: "ITP",
        data: [5, 15, 10, 20, 25],
        backgroundColor: "#00cc00",
        borderColor: "#00cc00",
        stack: 'Stack 2',
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
      text: 'Gráfico de Barras Personalizado',
    },
    tooltip: {
      enabled: true,
      mode: 'index',
      intersect: false,
    },
  },
  scales: {
    x: {
      stacked: true, 
      title: {
        display: true,
        text: 'Meses',
      },
    },
    y: {
      stacked: false, 
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
      <Bar
        data={data}
        options={options}
        plugins={plugins}
      />
    </div>
  );
};

export default ChartBarFour;