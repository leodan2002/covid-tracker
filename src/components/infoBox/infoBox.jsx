import React from 'react'

function infoBox(props) {
    const title = props.title;
    const dailyData = props.dailyData;
    const cummulativeData = props.cummulativeData;

    return (
        <div>
            <h3>{title}</h3>
            <p>{dailyData}</p>
            <p>{cummulativeData}</p>
        </div>
    )
}

export default infoBox
