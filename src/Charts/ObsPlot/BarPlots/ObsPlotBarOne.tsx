import { useEffect, useRef } from "react";
import * as Plot from "@observablehq/plot";

const ObsPlotBarOne = () => {
  const plotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const data = [
      {name: "A", value: 30},
      {name: "B", value: 80},
      {name: "C", value: 45},
      {name: "D", value: 60},
      {name: "E", value: 20},
      {name: "F", value: 90},
      {name: "G", value: 55},
    ];

    const chart = Plot.plot({
      marks: [
        Plot.barY(data, {x: "name", y: "value"})
      ]
    });

    if (plotRef.current) {
      plotRef.current.appendChild(chart);
    }

    return () => chart.remove();
  }, []);

  return <div ref={plotRef}></div>;
};

export default ObsPlotBarOne;
