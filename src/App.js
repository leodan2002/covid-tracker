import './App.css';
import React, {useEffect, useState} from 'react';
import DropDown from './components/dropDown/dropDown';
import InfoBox from './components/infoBox/infoBox';
import Chart from './components/chart/chart';
import Rank from './components/rank/rank';
import {fetchAllData, fetchProvinceData, fetchAllProvinceCumulativeCases, fetchTimeSeriesData} from './api';

function App() {

  // drop down
  const [province, setProvince] = useState("Ontario"); 

  // info boxes
  const [infoBoxData, setInfoBoxData] = useState({
        cases: "loading...",
        deaths: "loading...",
        recovered: "loading...",
        cumulativeCases: "loading...",
        cumulativeDeaths: "loading...",
        cumulativeRecovered: "loading..."
  });

  // ranking table
  const [allProvinceCumulativeCases, setAllProvinceCumulativeCases] = useState([]);

  // main chart
  const [chartData, setChartData] = useState([]);


  // mini chart

  // selecting info
  const [typeSelected, setTypeSelected] = useState("cases");


  // chart function
  async function updateChartData(){
    const timeSeriesData = await fetchTimeSeriesData(province);
    setChartData(timeSeriesData);
    
    
    
  } 

  // ranking table function
  async function updateRankedData(){
    const cumulativeCases = await fetchAllProvinceCumulativeCases();
    const sortedCumulativeCases = cumulativeCases.sort((a, b) => {
      return b.cumulativeCases - a.cumulativeCases;
    })
    setAllProvinceCumulativeCases(cumulativeCases);
  } 

  useEffect(() =>{
    fetchAllData()
    updateRankedData()

  }, [])

  useEffect(()=> {
    updateInfoBoxData()
    updateChartData()

  }, [province])


  // info box function
  async function updateInfoBoxData(){
    const provinceData = await fetchProvinceData(province);
    setInfoBoxData(provinceData);
  }

  return (
    <div className="app">
      <div className="app-left"> 
        <div className="app-header">
         <h1 className="app-title">Covid Tracker</h1>
         <DropDown 
          value = {province}
          handleChange = {(event) => {
            setProvince(event.target.value);
          }}
         />
        </div>
        <div className="app-stats">
            <InfoBox 
              title = 'Active Cases'
              dailyData = {infoBoxData.cases}
              cummulativeData = {infoBoxData.cumulativeCases}
              handleClick = {() => setTypeSelected("cases")}
              borderColor = "blue"
            />
            <InfoBox
              title = 'Recovery'
              dailyData = {infoBoxData.recovered}
              cummulativeData = {infoBoxData.cumulativeRecovered} 
              handleClick = {() => setTypeSelected("recovered")}
              borderColor = "green"
              
            />
            <InfoBox 
              title = 'Death'
              dailyData = {infoBoxData.deaths}
              cummulativeData = {infoBoxData.cumulativeDeaths}
              handleClick = {() => setTypeSelected("deaths")}
              borderColor = "red"

            />
        </div>
        <div className="app-main-chart">
            <Chart 
              data = {chartData}
              type = "main" 
              selected = ""/>
        </div>
      </div>

      <div className="app-right"> 
        <h2>Live Cases by Province</h2>
        <div className="app-ranking">
          <Rank 
            provinceData = {allProvinceCumulativeCases}  
          />
        </div>
        <div className="app-mini-chart">
          <Chart 
          data = {chartData}
          type = "mini" 
          selected = {typeSelected}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
