import React, { useState } from "react";
import Button from "../widgets/Button";
import { FaRegChartBar, FaCircleInfo } from "react-icons/fa6";

interface SidebarProps {
    onChartChange: (chart: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onChartChange }) => {
    const [selectedLib, setSelectedLib] = useState<string>("ApexCharts");
    const [isSelected, setIsSelected] = useState<boolean>(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
    };

    return (
        <>
            <aside className="bg-secondary text-primary w-full h-full p-2">
                <h2 className="text-center text-2xl p-4"> Escoje la Librería n.n </h2>
                <div className="flex flex-col items-center justify-end">
                    <div className="flex flex-col items-center">
                        <Button
                            text="ApexCharts"
                            onClick={() => {
                                onChartChange("ApexCharts");
                                handleClick();
                                setSelectedLib("ApexCharts");
                            }} 
                            inv={true}
                            icon={selectedLib == "ApexCharts" ?  <FaRegChartBar /> : ""}
                            selected={selectedLib == "ApexCharts" ?  true : false}
                        />
                        <Button 
                            text="Chart" 
                            onClick={() => {
                                onChartChange("Chart");
                                handleClick();
                                setSelectedLib("Chart");
                            }} 
                            inv={true}
                            icon={selectedLib == "Chart" ?  <FaRegChartBar /> : ""}
                            selected={selectedLib == "Chart" ?  true : false}
                        />
                        <Button 
                            text="Recharts" 
                            onClick={() => {
                                onChartChange("Recharts");
                                handleClick();
                                setSelectedLib("Recharts");
                            }} 
                            inv={true}
                            icon={selectedLib == "Recharts" ?  <FaRegChartBar /> : ""}
                            selected={selectedLib == "Recharts" ?  true : false}
                        />
                        <Button 
                            text="Chartist" 
                            onClick={() => {
                                onChartChange("Chartist");
                                setSelectedLib("Chartist");
                                handleClick();
                            }} 
                            inv={true}
                            icon={selectedLib == "Chartist" ?  <FaRegChartBar /> : ""}
                            selected={selectedLib == "Chartist" ?  true : false}
                        />
                        <Button
                            text="Observable Plot"
                            onClick={() => {
                                onChartChange("ObservablePlot");
                                handleClick();
                                setSelectedLib("ObservablePlot");
                            }} 
                            inv={true}
                            icon={selectedLib == "ObservablePlot" ?  <FaRegChartBar /> : ""}
                            selected={selectedLib == "ObservablePlot" ?  true : false}
                        />
                    </div>
                    <Button text="Información" inv={false} icon={<FaCircleInfo />}  />
                </div>
                
            </aside>
        </>
    );
};

export default Sidebar;
