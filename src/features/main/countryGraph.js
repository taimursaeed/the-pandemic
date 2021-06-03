import { Box } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";

export default function CountryGraph(props) {
  const [graphWidth, setGraphWidth] = useState(0);
  const [graphHeight, setGraphHeight] = useState(0);
  const resizeGraph = () => {
    const ele = window.document.body;
    setGraphWidth(ele.clientWidth > 768 ? ele.clientWidth - 410 : "100%");
    setGraphHeight(ele.clientWidth > 768 ? ele.clientHeight - 250 : "500px");
  };

  useEffect(() => {
    resizeGraph();
    window.addEventListener("resize", resizeGraph);
    return () => window.removeEventListener("resize", resizeGraph);
  }, [props]);

  const data = useMemo(() => {
    return {
      labels: props?.timeline?.map((i) => i.date).reverse(),
      datasets: [
        {
          label: "Infected",
          data: props?.timeline?.map((i) => i.confirmed).reverse(),
          fill: true,
          borderColor: "#4299E1",
          backgroundColor: "rgba(66, 153, 225,0.2)",
          borderWidth: 1,
          pointStyle: "line",
        },
        {
          label: "Deaths",
          data: props?.timeline?.map((i) => i.deaths).reverse(),
          fill: true,
          borderColor: "#F56565",
          backgroundColor: "rgba(245, 101, 101,0.2)",
          borderWidth: 1,
          pointStyle: "line",
        },
      ],
    };
  }, [props]);

  const options = {
    animation: false,
  };

  // Configure chartjs font
  defaults.font.family = "Inter";
  defaults.scale.grid.drawOnChartArea = false;

  return (
    <Box width={graphWidth} height={graphHeight}>
      <Line
        data={data}
        options={options}
        width={graphWidth}
        height={graphHeight}
      />
    </Box>
  );
}
