import React from 'react'
import "./infoBox.css"

function infoBox(props) {
    const title = props.title;
    const dailyData = props.dailyData;
    const cummulativeData = props.cummulativeData;
    const handleClick = props.handleClick;
    const borderColor = props.borderColor;

    return (
        <div className="infoBoxWrapper" onClick={handleClick} style={{borderTop: `10px solid ${borderColor}`}}>
            <h3>{title}</h3>
            <p>+{dailyData}</p>
            <p>{cummulativeData}</p>

        </div>
    )
}

export default infoBox
