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

    const getDataset = () => {
        const casesDataset = {
            label: 'Active Cases',
            data: data.map((e) => e.cases),
            borderColor: 'red',
            backgroundColor: 'red',
          }
        const recoveredDataset = {
            label: 'Recovred',
            data: data.map((e) => e.recovered),
            borderColor: 'green',
            backgroundColor: 'green',
          }
        const deathDataset = {
            label: 'Deaths',
            data: data.map((e) => e.deaths),
            borderColor: 'blue',
            backgroundColor: 'blue',
          }
        if (type === "main") {
            return [casesDataset, recoveredDataset, deathDataset]
        }
        else if (type === "mini" && selected === "cases") {
            return [casesDataset]
        }
        else if (type === "mini" && selected === "recovered") {
            return [recoveredDataset]
        }
        else if (type === "mini" && selected === "deaths") {
            return [deathDataset]
        }
    }

    

 const dataChart = {
  labels,
  datasets: getDataset()
};



    const getOptions = () => {
        if (type === "mini") {
            return {};
        } else {
            return { animation: {
                duration: 0
            }};
        }
    }


    console.log("chart data", dataChart);
    return (
        data.length === 0 ? "Loading ..." : 
            <div>
                <Line options={getOptions()} data={dataChart} />
            </div>
        
        
    )
}

export default chart
