import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexOtherTwo: React.FC = () => {
    const [state] = useState<{ series: ApexAxisChartSeries; options: ApexCharts.ApexOptions }>({
        series: [
            {
                name: 'box',
                type: 'boxPlot' as const,
                data: [
                    {
                        x: 'Deivi',
                        y: [54, 66, 69, 75, 88],
                        goals: [
                            {
                                value: 32,
                                strokeWidth: 0,
                                strokeHeight: 13,
                                strokeLineCap: 'round',
                                strokeColor: '#FEB019',
                            },
                        ],
                    },
                    {
                        x: 'Abraham',
                        y: [43, 65, 69, 76, 81],
                        goals: [
                            {
                                value: 35,
                                strokeWidth: 0,
                                strokeHeight: 13,
                                strokeLineCap: 'round',
                                strokeColor: '#FEB019',
                            },
                            {
                                value: 95,
                                strokeWidth: 0,
                                strokeHeight: 13,
                                strokeLineCap: 'round',
                                strokeColor: '#FEB019',
                            },
                        ],
                    },
                    {
                        x: 'El Danis',
                        y: [31, 39, 45, 51, 59],
                        goals: [
                            {
                                value: 64,
                                strokeWidth: 0,
                                strokeHeight: 13,
                                strokeLineCap: 'round',
                                strokeColor: '#FEB019',
                            },
                            {
                                value: 75,
                                strokeWidth: 0,
                                strokeHeight: 13,
                                strokeLineCap: 'round',
                                strokeColor: '#FEB019',
                            },
                        ],
                    },
                    {
                        x: 'Leo',
                        y: [39, 46, 55, 65, 71],
                        goals: [
                            {
                                value: 27,
                                strokeWidth: 0,
                                strokeHeight: 13,
                                strokeLineCap: 'round',
                                strokeColor: '#FEB019',
                            },
                            {
                                value: 77,
                                strokeWidth: 0,
                                strokeHeight: 13,
                                strokeLineCap: 'round',
                                strokeColor: '#FEB019',
                            },
                        ],
                    },
                    {
                        x: 'Ale Mora',
                        y: [29, 31, 35, 39, 44],
                        goals: [
                            {
                                value: 10,
                                strokeWidth: 0,
                                strokeHeight: 13,
                                strokeLineCap: 'round',
                                strokeColor: '#FEB019',
                            },
                            {
                                value: 56,
                                strokeWidth: 0,
                                strokeHeight: 13,
                                strokeLineCap: 'round',
                                strokeColor: '#FEB019',
                            },
                            {
                                value: 62,
                                strokeWidth: 0,
                                strokeHeight: 13,
                                strokeLineCap: 'round',
                                strokeColor: '#FEB019',
                            },
                            {
                                value: 98,
                                strokeWidth: 0,
                                strokeHeight: 13,
                                strokeLineCap: 'round',
                                strokeColor: '#FEB019',
                            },
                        ],
                    },
                ],
            },
        ],
        options: {
            chart: {
                type: 'boxPlot' as const,
                height: 350,
            },
            colors: ['#008FFB', '#FEB019'],
            title: {
                text: 'BoxPlot Chart with Outliers',
                align: 'left' as const,
            },
            xaxis: {
                type: 'category' as const,
            },
        },
    });

    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="boxPlot"
                    height={350}
                />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ApexOtherTwo;