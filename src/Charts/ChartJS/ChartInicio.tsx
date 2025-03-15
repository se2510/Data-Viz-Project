//import Mantenimiento from "../../widgets/Mantenimiento"
import ChartBarOne from "./BarPlots/ChartBarOne";
import ChartBarTwo from "./BarPlots/ChartBarTwo";
import ChartBarThree from "./BarPlots/ChartBarThree";
import ChartBarFour from "./BarPlots/ChartBarFour";
import ChartLineOne from "./LinePlots/ChartLineOne";
import ChartLineTwo from "./LinePlots/ChartLineTwo";
import ChartLineThree from "./LinePlots/ChartLineThree";
import ChartLineFour from "./LinePlots/ChartLineFour";
import ChartPieOne from "./PiePlots/ChartPieOne";
import ChartPieTwo from "./PiePlots/ChartPieTwo";
import ChartPieThree from "./PiePlots/ChartPieThree";
import ChartPolarFour from "./PiePlots/ChartPolarFour";
import ChartOtherOne from "./OtherPlots/ChartOtherOne";
import ChartOtherTwo from "./OtherPlots/ChartOtherTwo";
import ChartOtherThree from "./OtherPlots/ChartOtherThree";
import ChartOtherFour from "./OtherPlots/ChartOtherFour";

interface ChartInicioProps {
  selectedType: string;
}

const ChartInicio: React.FC<ChartInicioProps> = ({ selectedType = "Bar" }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 h-full">
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <ChartBarOne/>}
        {selectedType === "Line" &&  <ChartLineOne/>}
        {selectedType === "Pie" &&  <ChartPieOne/>}
        {selectedType === "Other" &&  <ChartOtherOne/>}      
      </div>
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <ChartBarTwo/>}
        {selectedType === "Line" &&  <ChartLineTwo/>}
        {selectedType === "Pie" &&  <ChartPieTwo/>}
        {selectedType === "Other" &&  <ChartOtherTwo/>}      
      </div>
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <ChartBarThree/>}
        {selectedType === "Line" &&  <ChartLineThree/>}
        {selectedType === "Pie" &&  <ChartPieThree/>}
        {selectedType === "Other" &&  <ChartOtherThree/>}      
      </div>
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <ChartBarFour/>}
        {selectedType === "Line" &&  <ChartLineFour/>}
        {selectedType === "Pie" &&  <ChartPolarFour/>}
        {selectedType === "Other" &&  <ChartOtherFour/>}     
      </div>
    </div>
  );
};

export default ChartInicio;
