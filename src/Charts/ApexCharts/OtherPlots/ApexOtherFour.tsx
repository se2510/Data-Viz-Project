import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const data = [
    {
        name: 'Serie de prueba 1 :o',
        data: [
            { x: '10:00', y: 20 },
            { x: '10:30', y: 30 },
            { x: '11:00', y: 40 },
            { x: '11:30', y: 50 },
            { x: '12:00', y: 60 },
            { x: '12:30', y: 70 },
            { x: '01:00', y: 80 },
            { x: '01:30', y: 90 },
        ],
    },
    {
        name: 'Serie de prueba 2 xd',
        data: [
            { x: '10:00', y: 10 },
            { x: '10:30', y: 20 },
            { x: '11:00', y: 30 },
            { x: '11:30', y: 40 },
            { x: '12:00', y: 50 },
            { x: '12:30', y: 60 },
            { x: '01:00', y: 70 },
            { x: '01:30', y: 80 },
        ],
    },
    {
        name: 'Serie de prueba 3 :B',
        data: [
            { x: '10:00', y: 5 },
            { x: '10:30', y: 15 },
            { x: '11:00', y: 25 },
            { x: '11:30', y: 35 },
            { x: '12:00', y: 45 },
            { x: '12:30', y: 55 },
            { x: '01:00', y: 65 },
            { x: '01:30', y: 75 },
        ],
    },
];

const colors = ['#008FFB', '#00E396', '#FEB019'];

const ApexOtherFour: React.FC = () => {
    const [state] = useState({
        series: data,
        options: {
            chart: {
                height: 450,
                type: 'heatmap' as const,
            },
            dataLabels: {
                enabled: false,
            },
            colors: colors,
            xaxis: {
                type: 'category' as const,
                categories: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30'],
            },
            title: {
                text: 'HeatMap Chart (Different color shades for each series)',
            },
            grid: {
                padding: {
                    right: 20,
                },
            },
        },
    });

    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="heatmap"
                    height={450}
                />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ApexOtherFour;