import { useMemo } from "react";
import { Line } from "react-chartjs-2";

export default function CountryGraph(props) {
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
  return <Line data={data} options={options} />;
}
