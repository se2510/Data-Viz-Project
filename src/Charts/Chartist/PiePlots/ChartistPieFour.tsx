import { useEffect, useRef, useState } from 'react';
import { PieChart } from 'chartist';
import Button from '../../../widgets/Button'; 
import "chartist/dist/index.css";
import './ChartistPieFour.css'; // Archivo CSS para estilos personalizados

const ChartistPieFour: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null); // Referencia para el contenedor del gráfico
    const [isDonut, setIsDonut] = useState(true); // Estado para alternar entre donut y pie chart
    const [data, setData] = useState([20, 30, 25, 25]); // Datos dinámicos para el gráfico
    const chartInstance = useRef<PieChart | null>(null); // Referencia para la instancia del gráfico

    // Función para actualizar el gráfico
    const updateChart = () => {
        if (!chartRef.current) return;

        // Destruir la instancia anterior si existe
        if (chartInstance.current) {
            chartInstance.current.detach();
        }

        // Crear una nueva instancia del gráfico
        chartInstance.current = new PieChart(
            chartRef.current, // Usar la referencia del contenedor
            {
                series: data, // Valores de las series
                labels: ['A', 'B', 'C', 'D'], // Etiquetas para cada sección
            },
            {
                donut: isDonut, // Alternar entre donut y pie chart
                donutWidth: isDonut ? 60 : 0, // Ancho del donut (0 para pie chart)
                showLabel: true, // Mostrar etiquetas en el gráfico
                labelInterpolationFnc: (value) => `${value}%`, // Formatear etiquetas
                chartPadding: 20, // Espaciado interno del gráfico
                startAngle: 270, // Ángulo inicial del gráfico
                total: 100, // Total para calcular porcentajes
                animate: {
                    duration: 1000, // Duración de la animación
                    easing: 'easeOutQuart', // Tipo de animación
                },
            }
        );
    };

    // Efecto para actualizar el gráfico cuando cambian los datos o el tipo de gráfico
    useEffect(() => {
        updateChart();
    }, [isDonut, data]);

    // Función para cambiar entre donut y pie chart
    const toggleDonut = () => {
        setIsDonut(!isDonut);
    };

    // Función para generar nuevos datos aleatorios
    const randomizeData = () => {
        const newData = [
            Math.floor(Math.random() * 50) + 10,
            Math.floor(Math.random() * 50) + 10,
            Math.floor(Math.random() * 50) + 10,
            Math.floor(Math.random() * 50) + 10,
        ];
        setData(newData);
    };

    return (
        <div className="dynamic-pie-chart-container">
            <div ref={chartRef} className="ct-chart"></div>
            <div className="flex flex-row justify-center items-center">
                <Button 
                    onClick={toggleDonut}
                    text= {isDonut ? 'Cambiar a Pie Chart' : 'Cambiar a Donut'}
                    inv={true}
                />
                <Button 
                    onClick={randomizeData}
                    text='Datos Aleatorios'
                    inv={true}
                />
            </div>
        </div>
    );
};

export default ChartistPieFour;