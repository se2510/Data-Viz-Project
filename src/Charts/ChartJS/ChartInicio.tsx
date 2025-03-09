import Mantenimiento from "../../widgets/Mantenimiento"


interface ChartInicioProps {
  selectedType: string;
}

const ChartInicio: React.FC<ChartInicioProps> = ({ selectedType = "Bar" }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 h-full">
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <Mantenimiento/>}
        {selectedType === "Line" &&  <Mantenimiento/>}
        {selectedType === "Pie" &&  <Mantenimiento/>}
        {selectedType === "Other" &&  <Mantenimiento/>}      </div>
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <Mantenimiento/>}
        {selectedType === "Line" &&  <Mantenimiento/>}
        {selectedType === "Pie" &&  <Mantenimiento/>}
        {selectedType === "Other" &&  <Mantenimiento/>}      </div>
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <Mantenimiento/>}
        {selectedType === "Line" &&  <Mantenimiento/>}
        {selectedType === "Pie" &&  <Mantenimiento/>}
        {selectedType === "Other" &&  <Mantenimiento/>}      </div>
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <Mantenimiento/>}
        {selectedType === "Line" &&  <Mantenimiento/>}
        {selectedType === "Pie" &&  <Mantenimiento/>}
        {selectedType === "Other" &&  <Mantenimiento/>}      </div>
    </div>
  );
};

export default ChartInicio;
