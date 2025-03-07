import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexOtherOne: React.FC = () => {
    const [state] = useState({
        series: [
            {
                name: 'Series 1',
                data: [80, 50, 30, 40, 100, 20],
            },
            {
                name: 'Series 2',
                data: [20, 30, 40, 80, 20, 80],
            },
            {
                name: 'Series 3',
                data: [44, 76, 78, 13, 43, 10],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'radar' as const,
                dropShadow: {
                    enabled: true,
                    blur: 1,
                    left: 1,
                    top: 1,
                },
            },
            title: {
                text: 'Radar Chart - Multi Series',
            },
            stroke: {
                width: 2,
            },
            fill: {
                opacity: 0.1,
            },
            markers: {
                size: 0,
            },
            yaxis: {
                stepSize: 20,
            },
            xaxis: {
                categories: ['2011', '2012', '2013', '2014', '2015', '2016'],
            },
        },
    });

    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="radar"
                    height={350}
                />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ApexOtherOne;