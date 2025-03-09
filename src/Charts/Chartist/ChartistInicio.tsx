import Mantenimiento from "../../widgets/Mantenimiento";
import ChartistBarOne from "./BarPlots/ChartistBarOne";
import ChartistBarTwo from "./BarPlots/ChartistBarTwo";
import ChartistPieFour from "./PiePlots/ChartistPieFour";
import ChartistPieOne from "./PiePlots/ChartistPieOne";
import ChartistPieThree from "./PiePlots/ChartistPieThree";
import ChartistPieTwo from "./PiePlots/ChartistPieTwo";
import ChartistBarThree from "./BarPlots/ChartistBarThree";
import ChartistBarFour from "./BarPlots/ChartistBarFour";


interface ChartistInicioProps {
  selectedType: string;
}

const ChartistInicio: React.FC<ChartistInicioProps> = ({ selectedType = "Bar" }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 h-full">
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <ChartistBarOne/>}
        {selectedType === "Line" &&  <Mantenimiento/>}
        {selectedType === "Pie" &&  <ChartistPieOne/>}
        {selectedType === "Other" &&  <Mantenimiento/>}
      </div>
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <ChartistBarTwo/>}
        {selectedType === "Line" &&  <Mantenimiento/>}
        {selectedType === "Pie" &&  <ChartistPieTwo/>}
        {selectedType === "Other" &&  <Mantenimiento/>}
      </div>
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <ChartistBarThree/>}
        {selectedType === "Line" &&  <Mantenimiento/>}
        {selectedType === "Pie" &&  <ChartistPieThree/>}
        {selectedType === "Other" &&  <Mantenimiento/>}
      </div>
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <ChartistBarFour  /> }
        {selectedType === "Line" &&  <Mantenimiento/>}
        {selectedType === "Pie" &&  <ChartistPieFour/>}
        {selectedType === "Other" &&  <Mantenimiento/>}
      </div>
    </div>
  );
};

export default ChartistInicio;
