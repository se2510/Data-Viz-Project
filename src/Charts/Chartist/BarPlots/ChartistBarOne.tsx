import { useEffect } from "react";
import { LineChart } from "chartist";
import "chartist/dist/index.css";

const ChartistBarOne = () => {
  useEffect(() => {
    new LineChart(
      "#chart",
      {
        labels: ["Ene", "Feb", "Mar", "Abr", "May"],
        series: [[5, 9, 7, 8, 5]],
      },
      {
        high: 10,
        low: 0,
      }
    );
  }, []);

  return(
    <div className="">
      <div id="chart" className="ct-chart ct-perfect-fourth"></div>
    </div>
  ) 
};

export default ChartistBarOne;
