import React, { useRef, useEffect } from 'react';
import ApexCharts from 'apexcharts';

const generateDayWiseTimeSeries = (baseVal: number, count: number, yrange: { min: number; max: number }): [number, number][] => {
    let i = 0;
    const series: [number, number][] = [];
    while (i < count) {
        const x = baseVal;
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([x, y]);
        baseVal += 86400000; 
        i++;
    }
    return series;
};

const ApexLineTwo: React.FC = () => {
    const chartRef = useRef(null); 
    const chartInstance = useRef<ApexCharts | null>(null);

    interface Series {
        name: string;
        data: [number, number][];
    }

    interface ChartOptions {
        series: Series[];
        chart: {
            type: string;
            height: number;
            stacked: boolean;
            events: {
                selection: (chart: ApexCharts, e: { xaxis: { min: number; max: number } }) => void;
            };
        };
        colors: string[];
        dataLabels: {
            enabled: boolean;
        };
        stroke: {
            curve: string;
        };
        fill: {
            type: string;
            gradient: {
                opacityFrom: number;
                opacityTo: number;
            };
        };
        legend: {
            position: string;
            horizontalAlign: string;
        };
        xaxis: {
            type: string;
        };
    }

    const options: ChartOptions = {
        series: [
            {
                name: 'South',
                data: generateDayWiseTimeSeries(new Date('07 Mar 2025 GMT').getTime(), 20, {
                    min: 10,
                    max: 60,
                }),
            },
            {
                name: 'North',
                data: generateDayWiseTimeSeries(new Date('07 Mar 2025 GMT').getTime(), 20, {
                    min: 10,
                    max: 20,
                }),
            },
            {
                name: 'Central',
                data: generateDayWiseTimeSeries(new Date('07 Mar 2025 GMT').getTime(), 20, {
                    min: 10,
                    max: 15,
                }),
            },
        ],
        chart: {
            type: 'area',
            height: 350,
            stacked: true,
            events: {
                selection: (chart, e) => {
                    console.log(new Date(e.xaxis.min));
                },
            },
        },
        colors: ['#008FFB', '#00E396', '#CED4DC'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'monotoneCubic',
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.6,
                opacityTo: 0.8,
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
        },
        xaxis: {
            type: 'datetime',
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
    }, []); 

    return (
        <div>
            <div ref={chartRef} id="chart"></div>
        </div>
    );
};

export default ApexLineTwo;