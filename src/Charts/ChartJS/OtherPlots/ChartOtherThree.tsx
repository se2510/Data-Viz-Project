import React, { useState, useEffect } from 'react';
import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

interface DataPoint {
  x: number;
  y: number;
}

const generateRandomData = (
  count: number,
  minX: number,
  maxX: number,
  minY: number,
  maxY: number
): DataPoint[] => {
  const data: DataPoint[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.random() * (maxX - minX) + minX;
    const y = Math.random() * (maxY - minY) + minY;
    data.push({ x, y });
  }
  return data;
};

const ChartOtherThree = () => {
  const [datos1, setDatos1] = useState(generateRandomData(100, 0, 100, 0, 100));
  const [datos2, setDatos2] = useState(generateRandomData(100, 20, 80, 20, 80));
  const [datos3, setDatos3] = useState(generateRandomData(50, 40, 60, 40, 60));

  useEffect(() => {
    const interval1 = setInterval(() => {
      setDatos1(generateRandomData(100, 0, 100, 0, 100));
    }, 2000);

    const interval2 = setInterval(() => {
      setDatos2(generateRandomData(100, 20, 80, 20, 80));
    }, 1000);

    const interval3 = setInterval(() => {
      setDatos3(generateRandomData(50, 40, 60, 40, 60));
    }, 3000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  const data = {
    datasets: [
      {
        label: 'Conjunto de Datos 1',
        data: datos1,
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: 'Conjunto de Datos 2',
        data: datos2,
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: 'Conjunto de Datos 3',
        data: datos3,
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgba(75, 192, 192, 1)',
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  interface TooltipCallbacks {
    label: (context: { raw: DataPoint }) => string;
  }

  interface Options {
    responsive: boolean;
    plugins: {
      legend: {
        position: string;
      };
      title: {
        display: boolean;
        text: string;
      };
      tooltip: {
        callbacks: TooltipCallbacks;
      };
    };
    scales: {
      x: {
        title: {
          display: boolean;
          text: string;
        };
        grid: {
          color: string;
        };
      };
      y: {
        title: {
          display: boolean;
          text: string;
        };
        grid: {
          color: string;
        };
      };
    };
  }

  const options: Options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Gráfico de Dispersión con Muchos Datos XD',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const dataPoint = context.raw;
            return `(${dataPoint.x.toFixed(2)}, ${dataPoint.y.toFixed(2)})`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Eje X',
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.3)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Eje Y',
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.3)',
        },
      },
    },
  };

  return (
    <div>
      <Scatter data={data} options={options} />
    </div>
  );
};

export default ChartOtherThree;