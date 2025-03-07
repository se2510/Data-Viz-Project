import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const generateData = (baseVal: number, count: number, yrange: { min: number; max: number }) => {
    let i = 0;
    const series = [];
    while (i < count) {
        const x = baseVal;
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        const z = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({ x, y, z });
        baseVal += 86400000;
        i++;
    }
    return series;
};

const ApexOtherThree: React.FC = () => {
    const [state] = useState({
        series: [
            {
                name: 'Bubble1',
                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60,
                }),
            },
            {
                name: 'Bubble2',
                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60,
                }),
            },
            {
                name: 'Bubble3',
                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60,
                }),
            },
            {
                name: 'Bubble4',
                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60,
                }),
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'bubble' as const,
            },
            dataLabels: {
                enabled: false,
            },
            fill: {
                opacity: 0.8,
            },
            title: {
                text: 'Simple Bubble Chart',
            },
            xaxis: {
                tickAmount: 12,
                type: 'category' as const,
            },
            yaxis: {
                max: 70,
            },
        },
    });

    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="bubble"
                    height={350}
                />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ApexOtherThree;