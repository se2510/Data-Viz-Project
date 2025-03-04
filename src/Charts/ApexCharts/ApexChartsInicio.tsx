import Chart from "react-apexcharts";
import ApexBarOne from "./BarPlots/ApexBarOne";
import ApexBarTwo from "./BarPlots/ApexBarTwo";
import ApexBarThree from "./BarPlots/ApexBarThree";
import ApexBarFour from "./BarPlots/ApexBarFour";

interface ApexChartsInicioProps {
  selectedType: string;
}

const ApexChartsInicio: React.FC<ApexChartsInicioProps> = ({ selectedType = "Bar" }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 h-full">
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <ApexBarOne/>}
      </div>
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <ApexBarTwo/>}
      </div>
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <ApexBarThree/>}
      </div>
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <ApexBarFour/>}
      </div>
    </div>
  );
};

export default ApexChartsInicio;
