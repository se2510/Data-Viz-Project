import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const ApexLineFour: React.FC = () => {
    const [data, setData] = useState<{ x: number; y: number }[]>([]);
    const XAXISRANGE = 60000;

    const getNewSeries = (lastDate: number, yrange: { min: number; max: number }): { x: number; y: number } => {
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        return { x: lastDate, y };
    };

    const options: ApexCharts.ApexOptions = {
        chart: {
            id: 'realtime',
            height: 350,
            type: 'line',
            animations: {
                enabled: true,
                dynamicAnimation: {
                    speed: 1000,
                },
            },
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        title: {
            text: 'Gráfica dinámica en tiempo real',
            align: 'left',
        },
        markers: {
            size: 0,
        },
        xaxis: {
            type: 'datetime',
            range: XAXISRANGE,
        },
        yaxis: {
            max: 100,
        },
        legend: {
            show: false,
        },
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const lastDate = new Date().getTime();
            const newDataPoint = getNewSeries(lastDate, { min: 10, max: 90 });

            setData((prevData) => {
                const newData = [...prevData, newDataPoint];
                if (newData.length > 100) {
                    newData.shift();
                }
                return newData;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Chart
                options={options}
                series={[{ data }]}
                type="line"
                height={350}
            />
        </div>
    );
};

export default ApexLineFour;