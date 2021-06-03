import { Box } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
export default function CountryGraph(props) {
  const [graphWidth, setGraphWidth] = useState(0);
  const [graphHeight, setGraphHeight] = useState(0);
  const resizeGraph = () => {
    const ele = document.getElementById("graphWrap").getBoundingClientRect();
    setGraphWidth(ele.width);
    setGraphHeight(ele.height);
  };

  useEffect(() => {
    resizeGraph();
    // alert("mounted");
  }, [props]);
  const data = useMemo(() => {
    return {
      labels: props?.timeline?.map((i) => i.date).reverse(),
      datasets: [
        {
          label: "Infected",
          data: props?.timeline?.map((i) => i.confirmed).reverse(),
          fill: false,
          borderColor: "#4299E1",
          borderWidth: 1,
          pointStyle: "line",
        },
        {
          label: "Deaths",
          data: props?.timeline?.map((i) => i.deaths).reverse(),
          fill: false,
          borderColor: "#F56565",
          borderWidth: 1,
          pointStyle: "line",
        },
      ],
    };
  }, [props]);

  const options = {
    animation: false,
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  // Math.floor(Math.random() * 200) + 100
  const width = graphWidth;
  const height = graphHeight;
  return (
    <Box id="graphWrap">
      <Line
        data={data}
        options={options}
        // height="100%"
        // width={width || 100}
        // height={height || 100}
        // onResize={() => {
        //   alert("resize called");
        // }}
      />
    </Box>
  );
}
