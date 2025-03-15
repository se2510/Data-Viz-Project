import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale
);

interface DataPoint {
    x: number;
    y: number; 
}

interface Series {
    name: string;
    data: DataPoint[];
}

const ChartLineOne: React.FC = () => {
    const [data, setData] = useState<Series[]>([
        { name: 'Voltaje A', data: [] },
        { name: 'Voltaje B', data: [] },
        { name: 'Voltaje C', data: [] },
    ]);
    const XAXISRANGE = 60000;

    const getNewSeries = (lastDate: number, yrange: { min: number; max: number }): Series[] => {
        return [
            {
                name: 'Voltaje A',
                data: [...data[0].data, { x: lastDate, y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min }],
            },
            {
                name: 'Voltaje B',
                data: [...data[1].data, { x: lastDate, y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min + 10 }],
            },
            {
                name: 'Voltaje C',
                data: [...data[2].data, { x: lastDate, y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min + 20 }],
            },
        ];
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const lastDate = new Date().getTime();
            const newSeries = getNewSeries(lastDate, { min: 10, max: 90 });
            setData(newSeries);
        }, 1000);

        return () => clearInterval(interval);
    }, [data]);

    const chartData = {
        datasets: data.map((series) => ({
            label: series.name,
            data: series.data,
            borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`, 
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            fill: false,
        })),
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'second',
                },
                min: new Date().getTime() - XAXISRANGE,
                max: new Date().getTime(),
            },
            y: {
                title: {
                    display: true,
                    text: 'Voltaje (V)',
                },
                max: 130,
            },
        },
        plugins: {
            title: {
                display: true,
                text: 'Monitorización de Voltajes en Tiempo Real',
            },
            legend: {
                position: 'top' as const,
            },
        },
    };

    return (
        <div>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default ChartLineOne;