import { useEffect, useRef, useState } from 'react';
import { BarChart } from 'chartist';
import "chartist/dist/index.css";

const ChartistBarFour: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null); // Referencia para el contenedor del gráfico
    const [data, setData] = useState([
        [800000, 1200000, 1400000, 1300000],
        [200000, 400000, 500000, 300000],
        [100000, 200000, 400000, 600000]
      ]); // Datos iniciales para el gráfico de barras
    const chartInstance = useRef<BarChart | null>(null); // Referencia para la instancia del gráfico

    // Función para actualizar el gráfico
    const updateChart = () => {
        if (!chartRef.current) return;

        // Destruir la instancia anterior si existe
        if (chartInstance.current) {
            chartInstance.current.detach();
        }

        // Crear una nueva instancia del gráfico de barras
        chartInstance.current = new BarChart(
            chartRef.current, // Usar la referencia del contenedor
            {
                labels: ['A', 'B', 'C', 'D'], // Etiquetas del eje X
                series: [
                    [800000, 1200000, 1400000, 1300000],
                    [200000, 400000, 500000, 300000],
                    [100000, 200000, 400000, 600000]
                  ], // Datos de las barras
            },
            {
                axisX: {
                    showGrid: true, // Mostrar líneas de la cuadrícula en el eje X
                },
                axisY: {
                    showGrid: true, // Mostrar líneas de la cuadrícula en el eje Y
                    onlyInteger: true, // Mostrar solo valores enteros en el eje Y
                },
                height: 300, // Altura del gráfico
                width: 600, // Ancho del gráfico
                stackBars: true, // No apilar las barras
                fullWidth: true, // Usar el ancho completo del contenedor
                chartPadding: {
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                },
            }
        );
    };

    // Efecto para actualizar el gráfico cuando cambian los datos
    useEffect(() => {
        updateChart();
    }, [data]);
    return (
        <div>
            <h2>Gráfico de Barras stackeado</h2>
            <div ref={chartRef}></div> {/* Contenedor del gráfico */}
        </div>
    );
};

export default ChartistBarFour;