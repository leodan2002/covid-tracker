import React from 'react'
import "./chart.css"
import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );



function chart(props) {

    


    const {data, type, selected} = props;


    const labels = data.map(e => (e.date));

 const dataChart = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: data.map((e) => e.cases),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

const options = {};


    console.log("chart data", dataChart);
    return (
        data.length === 0 ? "Loading ..." : 
            <div>
                <Line options={options} data={dataChart} />;
            </div>
        
        
    )
}

export default chart
