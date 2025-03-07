import React, { useRef, useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';

const ApexLineThree: React.FC = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef<ApexCharts | null>(null); 
    const [data, setData] = useState<Series[]>([
        { name: 'Voltaje A', data: [] },
        { name: 'Voltaje B', data: [] },
        { name: 'Voltaje C', data: [] },
    ]);
    const XAXISRANGE = 60000;

    interface DataPoint {
        x: number;
        y: number;
    }

    interface Series {
        name: string;
        data: DataPoint[];
    }

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

    const options: ApexCharts.ApexOptions = {
        series: data,
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
            text: 'Monitorización de Voltajes en Tiempo Real',
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
            title: {
                text: 'Voltaje (V)',
            },
            max: 100,
        },
        legend: {
            show: true,
            position: 'top',
        },
    };

    useEffect(() => {
        chartInstance.current = new ApexCharts(chartRef.current, options);
        chartInstance.current.render();

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [] );

    useEffect(() => {
        const interval = setInterval(() => {
            const lastDate = new Date().getTime();
            const newSeries = getNewSeries(lastDate, { min: 10, max: 90 });

            setData(newSeries);

            if (chartInstance.current) {
                chartInstance.current.updateSeries(newSeries);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [data]);

    return (
        <div>
            <div ref={chartRef} id="chart"></div>
        </div>
    );
};

export default ApexLineThree;