
interface ObsPlotInicio {
  selectedType: string;
}

const ObsPlotInicio: React.FC<ObsPlotInicio> = ({ selectedType = "Bar" }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 h-full">
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <p>1</p>}
      </div>
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <p>2</p>}
      </div>
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <p>3</p>}
      </div>
      <div className="bg-white p-4 rounded-md shadow-md h-full">
        {selectedType === "Bar" &&  <p>4</p>}
      </div>
    </div>
  );
};

export default ObsPlotInicio;
