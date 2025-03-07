import React, { useRef, useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import Button from '../../../widgets/Button';

const ApexPieOne: React.FC = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef<ApexCharts | null>(null);
    const [series, setSeries] = useState<number[]>([44, 55, 13, 33]); 

    const options: ApexCharts.ApexOptions = {
        series: series,
        chart: {
            width: 380,
            type: 'donut',
        },
        dataLabels: {
            enabled: false,
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200,
                },
                legend: {
                    show: false,
                },
            },
        }],
        legend: {
            position: 'right',
            offsetY: 0,
            height: 230,
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

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.updateSeries(series);
        }
    }, [series]);

    const appendData = () => {
        const newValue = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        setSeries((prevSeries) => [...prevSeries, newValue]);
    };

    const removeData = () => {
        setSeries((prevSeries) => {
            if (prevSeries.length > 0) {
                const newSeries = [...prevSeries];
                newSeries.pop();
                return newSeries;
            }
            return prevSeries;
        });
    };

    const randomize = () => {
        const newSeries = series.map(() => Math.floor(Math.random() * (100 - 1 + 1)) + 1);
        setSeries(newSeries);
    };

    const reset = () => {
        setSeries([44, 55, 13, 33]);
    };

    const handleRandomize = () => {
        randomize();
    };

    const handleAdd = () => {
        appendData();
    };

    const handleRemove = () => {
        removeData();
    };

    const handleReset = () => {
        reset();
    };

    return (
        <div>
            <div ref={chartRef} id="chart"></div>
            <div className='flex flex-row justify-center space-x-4'>
                <Button inv={true} onClick={handleRandomize} text="Randomize" />
                <Button inv={true} onClick={handleAdd} text="Add" />
                <Button inv={true} onClick={handleRemove} text="Remove" />
                <Button inv={true} onClick={handleReset} text="Reset" />
            </div>
        </div>
    );
};

export default ApexPieOne;