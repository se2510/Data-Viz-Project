import { useEffect, useRef, useState } from 'react';
import Button from '../../../widgets/Button';
import { BarChart } from 'chartist';
import "chartist/dist/index.css";

const ChartistBarTwo: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null); // Referencia para el contenedor del gráfico
    const [data, setData] = useState([10, 15, 7, 12, 9]); // Datos iniciales para el gráfico de barras
    const chartInstance = useRef<BarChart | null>(null); // Referencia para la instancia del gráfico

    // Función para actualizar el gráfico
    const updateChart = () => {
        if (!chartRef.current) return;

        // Destruir la instancia anterior si existe
        if (chartInstance.current) {
            chartInstance.current.detach();
        }

        // Crear una nueva instancia del gráfico de barras horizontales
        chartInstance.current = new BarChart(
            chartRef.current, // Usar la referencia del contenedor
            {
                labels: ['A', 'B', 'C', 'D', 'E'], // Etiquetas del eje Y (horizontal)
                series: [data], // Datos de las barras
            },
            {
                axisX: {
                    showGrid: false, // Ocultar líneas de la cuadrícula en el eje X
                },
                axisY: {
                    showGrid: true, // Mostrar líneas de la cuadrícula en el eje Y
                    onlyInteger: true, // Mostrar solo valores enteros en el eje Y
                },
                height: 300, // Altura del gráfico
                width: 600, // Ancho del gráfico
                horizontalBars: true, // Habilitar barras horizontales
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

    // Función para generar nuevos datos aleatorios
    const randomizeData = () => {
        const newData = Array.from({ length: 5 }, () => Math.floor(Math.random() * 20) + 1);
        setData(newData);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Gráfico de Barras Horizontales</h2>
            <div ref={chartRef} style={styles.chart}></div> {/* Contenedor del gráfico */}
            <div style={styles.controls}>
                <Button onClick={randomizeData}
                    text="Datos Aleatorios"
                    inv={true}
                />
            </div>
        </div>
    );
};

// Estilos en línea para el componente
const styles = {
    container: {
        textAlign: 'center' as const,
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '24px',
        marginBottom: '20px',
        color: '#333',
    },
    chart: {
        margin: '0 auto',
    },
    controls: {
        marginTop: '20px',
    },
};

export default ChartistBarTwo;