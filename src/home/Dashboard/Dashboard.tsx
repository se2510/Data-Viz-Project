import React, { useState } from "react";
import ApexChartsInicio from "../../Charts/ApexCharts/ApexChartsInicio";
import ChartistInicio from "../../Charts/Chartist/ChartistInicio";
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
  const [selectedType, setSelectedType] = useState<string>("Bar");

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
          <div className="Chart-Selection bg-primary p-2">
            <div className="flex flex-row justify-items-start">
              <Button text="Barras" inv={false} icon={<IoBarChart />} 
                onClick={() => setSelectedType("Bar")}
                selected={selectedType === "Bar"}
              />
              <Button text="Lineas" inv={false} icon={<FaChartLine />}
                onClick={() => setSelectedType("Line")}  
                selected={selectedType === "Line"}
              />
              <Button text="Pastel" inv={false} icon={<FaChartPie />}  
                onClick={() => setSelectedType("Pie")}
                selected={selectedType === "Pie"}
              />
              <Button text="Otros tipos" inv={false} icon={<FaRandom />} 
                onClick={() => setSelectedType("Other")}
                selected={selectedType === "Other"}
              />
            </div>
          </div>
          <div className="Charts bg-gray-100 w-full min-w-0  p-2">
            {selectedChart === "ApexCharts" && <ApexChartsInicio selectedType={selectedType}/>}
            {selectedChart === "Chartist" && <ChartistInicio selectedType={selectedType}/>}
            {selectedChart === "Chart" && <ChartInicio selectedType={selectedType}/>}
            {selectedChart === "ObservablePlot" && <ObservablePlotInicio selectedType={selectedType}/>}
            {selectedChart === "Recharts" && <RechartsInicio selectedType={selectedType}/>}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Dashboard;