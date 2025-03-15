import { useState, useEffect } from 'react';
import { Bubble } from 'react-chartjs-2';
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

interface BubbleDataPoint {
    x: number;
    y: number;
    r: number;
}

const generateRandomBubbleData = (
    count: number,
    minX: number,
    maxX: number,
    minY: number,
    maxY: number,
    minR: number,
    maxR: number
): BubbleDataPoint[] => {
    const data: BubbleDataPoint[] = [];
    for (let i = 0; i < count; i++) {
        const x = Math.random() * (maxX - minX) + minX;
        const y = Math.random() * (maxY - minY) + minY;
        const r = Math.random() * (maxR - minR) + minR; 
        data.push({ x, y, r });
    }
    return data;
};

const ChartOtherFour = () => {
    const [datos1, setDatos1] = useState(generateRandomBubbleData(50, 0, 100, 0, 100, 5, 20));
    const [datos2, setDatos2] = useState(generateRandomBubbleData(50, 20, 80, 20, 80, 5, 20));
    const [datos3, setDatos3] = useState(generateRandomBubbleData(30, 40, 60, 40, 60, 5, 20));

    useEffect(() => {
    const interval1 = setInterval(() => {
        setDatos1(generateRandomBubbleData(50, 0, 100, 0, 100, 5, 20));
    }, 2000);

    const interval2 = setInterval(() => {
        setDatos2(generateRandomBubbleData(50, 20, 80, 20, 80, 5, 20));
    }, 1000);

    const interval3 = setInterval(() => {
        setDatos3(generateRandomBubbleData(30, 40, 60, 40, 60, 5, 20));
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
            },
            {
            label: 'Conjunto de Datos 2',
            data: datos2,
            backgroundColor: 'rgba(54, 162, 235, 0.8)',
            borderColor: 'rgba(54, 162, 235, 1)',
            },
            {
            label: 'Conjunto de Datos 3',
            data: datos3,
            backgroundColor: 'rgba(75, 192, 192, 0.8)',
            borderColor: 'rgba(75, 192, 192, 1)',
            },
        ],
    };

    interface TooltipCallbacks {
        label: (context: { raw: BubbleDataPoint }) => string;
    }

    interface PluginsOptions {
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
    }

    interface ScaleOptions {
        title: {
            display: boolean;
            text: string;
        };
        grid: {
            color: string;
        };
    }

    interface ScalesOptions {
        x: ScaleOptions;
        y: ScaleOptions;
    }

    interface ChartOptions {
        responsive: boolean;
        plugins: PluginsOptions;
        scales: ScalesOptions;
    }

    const options: ChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Gráfico de Burbujas con Muchos Datos XD',
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const dataPoint = context.raw;
                        return `(${dataPoint.x.toFixed(2)}, ${dataPoint.y.toFixed(2)}, Tamaño: ${dataPoint.r.toFixed(2)})`;
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
        <Bubble data={data} options={options} />
        </div>
    );
};

export default ChartOtherFour;