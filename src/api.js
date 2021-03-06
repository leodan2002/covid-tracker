import axios from "axios"

const URL = "https://api.opencovid.ca"



export const fetchAllData = async() => {
    const response = await axios.get(URL)
    console.log(response);
    return response.data;
}

// fetching data for the infox boxes
export const fetchProvinceData = async(province) => {
    const response = await axios.get(`${URL}/summary`);
    
    const provinceData = response.data.summary.find(e => e.province === province);

    return {
        cases: provinceData.cases,
        deaths: provinceData.deaths,
        recovered: provinceData.recovered,
        cumulativeCases: provinceData.cumulative_cases,
        cumulativeDeaths: provinceData.cumulative_deaths,
        cumulativeRecovered: provinceData.cumulative_recovered
    }

}

// fetching the data for the ranking table
export const fetchAllProvinceCumulativeCases = async() => {
    const response = await axios.get(`${URL}/summary`);

    const ontarioData = response.data.summary.find(e => e.province === "Ontario");
    const albertaData = response.data.summary.find(e => e.province === "Alberta");
    const bcData = response.data.summary.find(e => e.province === "BC");
    const manitobaData = response.data.summary.find(e => e.province === "Manitoba");
    const newBrunswickData = response.data.summary.find(e => e.province === "New Brunswick");
    const nlData = response.data.summary.find(e => e.province === "NL");
    const novaScotiaData = response.data.summary.find(e => e.province === "Nova Scotia");
    const nunavutData = response.data.summary.find(e => e.province === "Nunavut");
    const nwtData = response.data.summary.find(e => e.province === "NWT");
    const peiData = response.data.summary.find(e => e.province === "PEI");
    const quebecData = response.data.summary.find(e => e.province === "Quebec");
    const saskatchewanData = response.data.summary.find(e => e.province === "Saskatchewan");
    const yukonData = response.data.summary.find(e => e.province === "Yukon");

    return [
        {province : "Ontario" , cumulativeCases : ontarioData.cumulative_cases},
        {province : "Alberta" , cumulativeCases : albertaData.cumulative_cases},
        {province : "BC" , cumulativeCases : bcData.cumulative_cases},
        {province : "Manitoba" , cumulativeCases : manitobaData.cumulative_cases},
        {province : "New Brunswick" , cumulativeCases : newBrunswickData.cumulative_cases},
        {province : "NL" , cumulativeCases : nlData.cumulative_cases},
        {province : "Nova Scotia" , cumulativeCases : novaScotiaData.cumulative_cases},
        {province : "Nunavut" , cumulativeCases : nunavutData.cumulative_cases},
        {province : "NWT" , cumulativeCases : nwtData.cumulative_cases},
        {province : "PEI" , cumulativeCases : peiData.cumulative_cases},
        {province : "Quebec" , cumulativeCases : quebecData.cumulative_cases},
        {province : "Saskatchewan" , cumulativeCases : saskatchewanData.cumulative_cases},
        {province : "Yukon" , cumulativeCases : yukonData.cumulative_cases},
    ]
}

const provinceConverter = (province) => {
    if (province === "Alberta") {
        return "AB"
    } else if (province === "BC") {
        return "BC"
    } else if (province === "Manitoba") {
        return "MB"
    } else if (province === "New Brunswick") {
        return "NB"
    } else if (province === "NL") {
        return "NL"
    } else if (province === "Nova Scotia"){
        return "NS"
    } else if (province === "Nunavut") {
        return "NU"
    } else if (province === "NWT") {
        return "NT"
    } else if (province === "Ontario"){
        return "ON"
    } else if (province === "PEI"){
        return "PE"
    } else if (province === "Quebec"){
        return "QC"
    } else if (province === "Saskatchewan"){
        return "SK"
    } else if (province === "Yukon"){
        return "YT"
    } else {
        console.log("Invalid Province")
    }
}

export const fetchTimeSeriesData = async(province) => {
    const response = await axios.get(`${URL}/timeseries?loc=${provinceConverter(province)}&after=2021-01-01&stat=active`);
    console.log("timeseries data",response);

    return response.data.active.map((e)=>{
        return {
            cases: e.cumulative_cases,
            deaths: e.cumulative_deaths,
            recovered: e.cumulative_recovered,
            date: e.date_active
        }
    }) 
    
    
}
// Alberta, BC, Manitoba, New Brunswick, NL, Nova Scotia, Nunavut, NWT, Ontario, PEI, Quebec, Saskatchewan, Yukon


