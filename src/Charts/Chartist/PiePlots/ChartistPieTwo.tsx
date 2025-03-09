import { useEffect, useRef } from 'react';
import { PieChart } from 'chartist';
import "chartist/dist/index.css";

const ChartistPieTwo: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null); // Referencia para el contenedor del gráfico

    useEffect(() => {
        if (!chartRef.current) return; // Verificar que la referencia exista

        // Configuración de la gráfica de pastel con personalizaciones
        const chart = new PieChart(
            chartRef.current, // Usar la referencia del contenedor
            {
                series: [15, 25, 35, 25], // Valores de las series
                labels: ['X', 'Y', 'Z', 'W'], // Etiquetas para cada sección
            },
            {
                donut: true, // Convertir en un gráfico de donut
                donutWidth: 40, // Ancho del donut
                showLabel: true, // Mostrar etiquetas en el gráfico
                labelInterpolationFnc: (value) => `${value}%`, // Formatear etiquetas
                chartPadding: 30, // Espaciado interno del gráfico
                startAngle: 270, // Ángulo inicial del gráfico
                total: 100, // Total para calcular porcentajes
                animate: {
                    duration: 1000, // Duración de la animación
                    easing: 'easeOutQuart', // Tipo de animación
                },
            }
        );

        // Limpieza al desmontar el componente
        return () => {
            if (chartRef.current) {
                chartRef.current.innerHTML = ''; // Limpiar el contenedor del gráfico
            }
            chart.detach(); // Desvincular el gráfico para evitar fugas de memoria
        };
    }, []);

    return (
        <div>
            <div ref={chartRef} className="ct-chart"></div> {/* Contenedor del gráfico */}
        </div>
    );
};

export default ChartistPieTwo;