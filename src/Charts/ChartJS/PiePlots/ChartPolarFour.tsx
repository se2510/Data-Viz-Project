import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
);

interface ChartPolarFourProps {
  data?: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string[];
      borderWidth: number;
    }[];
  };
  options?: ChartOptions<'polarArea'>;
  plugins?: any[]; 
}

const ChartPolarFour: React.FC<ChartPolarFourProps> = ({
  data: customData,
  options: customOptions,
  plugins: customPlugins,
}) => {
  const defaultData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
    datasets: [
      {
        label: "ITP",
        data: [5, 15, 10, 20, 25],
        backgroundColor: ["#00cc00", "#00b800", "#00a300", "#008f00", "#007a00"],
        borderColor: ["#00cc00", "#00b800", "#00a300", "#008f00", "#007a00"],
        borderWidth: 1,
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
        text: 'Gráfico Polar Personalizado',
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 30,
      },
    },
  };

  const data = customData || defaultData;
  const options = { ...defaultOptions, ...customOptions };
  const plugins = customPlugins || [];

  return (
    <div>
      <PolarArea
        data={data}
        options={options}
        plugins={plugins}
      />
    </div>
  );
};

export default ChartPolarFour;