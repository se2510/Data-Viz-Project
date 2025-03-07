import React, { useRef, useEffect } from 'react';
import ApexCharts from 'apexcharts';

const ApexPieTwo: React.FC = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef<ApexCharts | null>(null); 

    const options = {
        series: [44, 55, 13, 43, 22],
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200,
                },
                legend: {
                    position: 'bottom',
                },
            },
        }],
    };

    useEffect(() => {
        chartInstance.current = new ApexCharts(chartRef.current, options);
        chartInstance.current.render();

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []); // El array vacío asegura que esto solo se ejecute una vez al montar el componente

    return (
        <div>
            <div ref={chartRef} id="chart"></div>
        </div>
    );
};

export default ApexPieTwo;