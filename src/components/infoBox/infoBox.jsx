import React from 'react'
import "./infoBox.css"

function infoBox(props) {
    const title = props.title;
    const dailyData = props.dailyData;
    const cummulativeData = props.cummulativeData;
    const handleClick = props.handleClick;
    const borderColor = props.borderColor;
    const dailyCasesColor = props.dailyCasesColor;

    return (
        <div className="infoBoxWrapper" onClick={handleClick} style={{borderTop: `10px solid ${borderColor}`}}>
            <h3 className="infoBoxTitle">{title}</h3>
            <p className="dailyCases" style={{color: `${dailyCasesColor}`}}>+{dailyData}</p>
            <p className="totalCases">Total: {cummulativeData}</p>

        </div>
    )
}

export default infoBox
