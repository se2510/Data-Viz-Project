import Chart from "react-apexcharts";
import ApexBarOne from "./BarPlots/ApexBarOne";
import ApexBarTwo from "./BarPlots/ApexBarTwo";
import ApexBarThree from "./BarPlots/ApexBarThree";
import ApexBarFour from "./BarPlots/ApexBarFour";
import ApexLineOne from "./LinePlots/ApexLineOne";
import ApexLineTwo from "./LinePlots/ApexLineTwo";
import ApexLineThree from "./LinePlots/ApexLineThree";
import ApexLineFour from "./LinePlots/ApexLineFour";
import ApexPieOne from "./PiePlots/ApexPieOne";
import ApexPieTwo from "./PiePlots/ApexPieTwo";
import ApexPieThree from "./PiePlots/ApexPieThree";
import ApexPieFour from "./PiePlots/ApexPieFour";
import ApexOtherOne from "./OtherPlots/ApexOtherOne";
import ApexOtherTwo from "./OtherPlots/ApexOtherTwo";
import ApexOtherThree from "./OtherPlots/ApexOtherThree";
import ApexOtherFour from "./OtherPlots/ApexOtherFour";

interface ApexChartsInicioProps {
  selectedType: string;
}

const ApexChartsInicio: React.FC<ApexChartsInicioProps> = ({ selectedType = "Bar" }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 h-full">
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <ApexBarOne/>}
        {selectedType === "Line" &&  <ApexLineOne/>}
        {selectedType === "Pie" &&  <ApexPieOne/>}
        {selectedType === "Other" &&  <ApexOtherOne/>}

      </div>
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <ApexBarTwo/>}
        {selectedType === "Line" &&  <ApexLineTwo/>}
        {selectedType === "Pie" &&  <ApexPieTwo/>}
        {selectedType === "Other" &&  <ApexOtherTwo/>}

      </div>
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <ApexBarThree/>}
        {selectedType === "Line" &&  <ApexLineThree/>}
        {selectedType === "Pie" &&  <ApexPieThree/>}
        {selectedType === "Other" &&  <ApexOtherThree/>}

      </div>
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <ApexBarFour/>}
        {selectedType === "Line" &&  <ApexLineFour/>}
        {selectedType === "Pie" &&  <ApexPieFour/>}
        {selectedType === "Other" &&  <ApexOtherFour/>}

      </div>
    </div>
  );
};

export default ApexChartsInicio;
