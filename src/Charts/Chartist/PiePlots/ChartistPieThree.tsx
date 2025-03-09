import { useEffect, useRef } from 'react';
import { PieChart } from 'chartist';
import "chartist/dist/index.css";
import './ChartistPieThree.css'; // Archivo CSS para estilos personalizados

const ChartistPieThree: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null); // Referencia para el contenedor del gráfico

    useEffect(() => {
        if (!chartRef.current) return; // Verificar que la referencia exista

        // Configuración de la gráfica de pastel con personalizaciones avanzadas
        const chart = new PieChart(
            chartRef.current, // Usar la referencia del contenedor
            {
                series: [20, 30, 25, 25], // Valores de las series
                labels: ['Red', 'Green', 'Blue', 'Yellow'], // Etiquetas para cada sección
            },
            {
                donut: true, // Convertir en un gráfico de donut
                donutWidth: 60, // Ancho del donut
                showLabel: true, // Mostrar etiquetas en el gráfico
                labelInterpolationFnc: (value) => `${value}%`, // Formatear etiquetas
                chartPadding: 20, // Espaciado interno del gráfico
                startAngle: 180, // Ángulo inicial del gráfico
                total: 100, // Total para calcular porcentajes
                animate: {
                    duration: 2000, // Duración de la animación
                    easing: 'easeOutBack', // Tipo de animación más vistosa
                },
            }
        );

        // Eventos personalizados para interactividad
        chart.on('draw', (data) => {
            if (data.type === 'slice') {
                // Animación de crecimiento al pasar el mouse
                data.element.attr({
                    style: 'cursor: pointer;', // Cambiar el cursor al pasar sobre las secciones
                });

                data.element._node.addEventListener('mouseenter', () => {
                    data.element.animate({
                        opacity: 0.8, // Cambiar la opacidad
                        transform: 'scale(1.05)', // Escalar la sección
                    });
                });

                data.element._node.addEventListener('mouseleave', () => {
                    data.element.animate({
                        opacity: 1, // Restaurar la opacidad
                        transform: 'scale(1)', // Restaurar el tamaño
                    });
                });
            }
        });

        // Limpieza al desmontar el componente
        return () => {
            if (chartRef.current) {
                chartRef.current.innerHTML = ''; // Limpiar el contenedor del gráfico
            }
            chart.detach(); // Desvincular el gráfico para evitar fugas de memoria
        };
    }, []);

    return (
        <div className="chartist-pie-three-container">
            <h2>Gráfico de Pastel Interactivo y Animado</h2>
            <div ref={chartRef} className="ct-chart"></div> {/* Contenedor del gráfico */}
        </div>
    );
};

export default ChartistPieThree;