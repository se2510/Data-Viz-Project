import Mantenimiento from "../../widgets/Mantenimiento";
import { RechartsBarFour, RechartsBarOne, RechartsBarThree, RechartsBarTwo } from "./BarPlots/IndexBar";
import { RechartsLineFour, RechartsLineOne, RechartsLineThree, RechartsLineTwo } from "./LinePlots/IndexLine";

interface RechartsInicioProps {
  selectedType: string; 
}

const RechartsInicio: React.FC<RechartsInicioProps> = ({ selectedType = "Bar" }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 h-full">
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <RechartsBarOne/>}
        {selectedType === "Line" &&  <RechartsLineOne/>}
        {selectedType === "Pie" &&  <Mantenimiento/>}
        {selectedType === "Other" &&  <Mantenimiento/>}
      </div>
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <RechartsBarTwo/>}
        {selectedType === "Line" &&  <RechartsLineTwo/>}
        {selectedType === "Pie" &&  <Mantenimiento/>}
        {selectedType === "Other" &&  <Mantenimiento/>}      </div>
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <RechartsBarThree/>}
        {selectedType === "Line" &&  <RechartsLineThree/>}
        {selectedType === "Pie" &&  <Mantenimiento/>}
        {selectedType === "Other" &&  <Mantenimiento/>}      </div>
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <RechartsBarFour/>}
        {selectedType === "Line" &&  <RechartsLineFour/>}
        {selectedType === "Pie" &&  <Mantenimiento/>}
        {selectedType === "Other" &&  <Mantenimiento/>}      </div>
    </div>
  );
};

export default RechartsInicio;
