import React, { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { DatasetsContext } from "./context";

function Chart() {
  const { state, dispatch } = useContext(DatasetsContext);

  const functionPlugin = {
    id: "test",
    beforeInit: function (chart: any) {
      var data = chart.config.data;
      for (var i = 0; i < data.datasets.length; i++) {
        for (var j = 0; j < data.labels.length; j++) {
          var fct = data.datasets[i].function,
            x = data.labels[j],
            y = fct(x);
          data.datasets[i].data.push(y);
        }
      }
    },
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    functionPlugin,
    Title,
    Tooltip,
    Legend
  );

  var data = {
    labels: [1, 2, 3, 4, 5],
    datasets: state
};

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
        },
      },
    },
  };

  return (
    <>
      <Line options={options} data={data} />
    </>
  );
}

export default Chart;
