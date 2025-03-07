import React, { useRef, useEffect } from 'react';
import ApexCharts from 'apexcharts';

const ApexPieFour: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null); 
    
    const options: ApexCharts.ApexOptions = {
        series: [44, 55, 41, 17, 15],
        chart: {
            width: 380,
            type: 'donut',
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270,
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            type: 'gradient',
        },
        legend: {
            formatter: function (val: string, opts: { w: { globals: { series: number[] } }, seriesIndex: number }) {
                return `${val} - ${opts.w.globals.series[opts.seriesIndex]}`;
            },
        },
        title: {
            text: 'Gradient Donut with custom Start-angle',
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        ],
    };

    useEffect(() => {
        if (chartRef.current) {
            const chart = new ApexCharts(chartRef.current, options);
            chart.render();

            return () => {
                chart.destroy();
            };
        }
    }, []);

    return (
        <div>
            <div ref={chartRef} id="chart"></div>
        </div>
    );
};

export default ApexPieFour;