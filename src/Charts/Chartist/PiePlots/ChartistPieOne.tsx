import { useEffect, useRef } from 'react';
import { PieChart } from 'chartist';
import "chartist/dist/index.css";

const ChartistPieOne: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null); // Referencia para el contenedor del gráfico

    useEffect(() => {
        if (!chartRef.current) return; // Verificar que la referencia exista

        // Configuración de la gráfica de pastel
        const chart = new PieChart(
            chartRef.current, // Usar la referencia del contenedor
            {
                series: [10, 20, 30, 40], // Valores de las series
                labels: ['A', 'B', 'C', 'D'], // Etiquetas para cada sección
            },
            {
                donut: false, // Si es true, se convierte en un donut
                showLabel: true, // Mostrar etiquetas en el gráfico
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

export default ChartistPieOne;