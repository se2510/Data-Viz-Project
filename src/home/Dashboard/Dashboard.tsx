import React, { useState } from "react";
import ApexChartsInicio from "../../Charts/ApexCharts/ApexChartsInicio";
import ChartistInicio from "../../Charts/Chartist/ChartistInicio";
import EpochInicio from "../../Charts/Epoch/EpochInicio";
import ObservablePlotInicio from "../../Charts/ObsPlot/ObsPlotInicio";
import RechartsInicio from "../../Charts/Recharts/RechartsInicio";
import ChartInicio from "../../Charts/ChartJS/ChartInicio";
import "./Dashboard.css";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Button from "../../widgets/Button";

// Iconos
import { IoBarChart } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa6";
import { FaRandom } from "react-icons/fa";

const Dashboard: React.FC = () => {
  const [selectedChart, setSelectedChart] = useState<string>("ApexCharts");

  const handleChartChange = (chart: string) => {
    setSelectedChart(chart);
  };

  return (
    <>
      <div className="contenedor w-full h-full">
        <div className="Navbar">
          <Navbar />
        </div>
        <div className="Sidebar ">
          <Sidebar onChartChange={handleChartChange} />
        </div>
        <div className="dashboard">
          <div className="Chart-Selection bg-[#ee9b00] text-[#e9d8a6]p-2">
            <div className="flex flex-row justify-items-start">
              <Button text="Barras" inv={true} icon={<IoBarChart />}/>
              <Button text="Lineas" inv={true} icon={<FaChartLine />}/>
              <Button text="Pastel" inv={true} icon={<FaChartPie />}  />
              <Button text="Estilo Aleatorio" inv={true} icon={<FaRandom />} />
            </div>
          </div>
          <div className="Charts bg-gray-100 w-full min-w-0  p-2">
            {selectedChart === "ApexCharts" && <ApexChartsInicio />}
            {selectedChart === "Chartist" && <ChartistInicio />}
            {selectedChart === "Chart" && <ChartInicio />}
            {/* {selectedChart === "Epoch" && <EpochInicio />} */}
            {selectedChart === "ObservablePlot" && <ObservablePlotInicio />}
            {selectedChart === "Recharts" && <RechartsInicio />}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Dashboard;