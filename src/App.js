import './App.css';
import React, {useEffect, useState} from 'react';
import DropDown from './components/dropDown/dropDown';
import InfoBox from './components/infoBox/infoBox';
import Chart from './components/chart/chart';
import Rank from './components/rank/rank';
import {fetchAllData, fetchProvinceData, fetchAllProvinceCumulativeCases} from './api';

function App() {

  const [province, setProvince] = useState("Ontario");
  const [infoBoxData, setInfoBoxData] = useState({
        cases: "loading...",
        deaths: "loading...",
        recovered: "loading...",
        cumulativeCases: "loading...",
        cumulativeDeaths: "loading...",
        cumulativeRecovered: "loading..."
  });

  const [allProvinceCumulativeCases, setAllProvinceCumulativeCases] = useState([]);

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
  }, [province])



  async function updateInfoBoxData(){
    const provinceData = await fetchProvinceData(province);
    setInfoBoxData(provinceData);
  }

  return (
    <div className="app">
      <div className="app-left"> 

        <div className="app-header">
         <h1>Covid Tracker</h1>
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
            
            />
          
            <InfoBox
              title = 'Recovery'
              dailyData = {infoBoxData.recovered}
              cummulativeData = {infoBoxData.cumulativeRecovered} 
            />
            

         
            <InfoBox 
              title = 'Death'
              dailyData = {infoBoxData.deaths}
              cummulativeData = {infoBoxData.cumulativeDeaths}
            />

          
        </div>

        <div className="app-main-chart">
            <Chart />
        </div>


      </div>
      <div className="app-right"> 
        <h2>Cases</h2>
        <div className="app-ranking">
          <Rank 
            provinceData = {allProvinceCumulativeCases}  
          />
        </div>
        <div className="app-mini-chart">
          <Chart />
        </div>
      </div>
      
    </div>
  );
}

export default App;
