import React from 'react'

function rank(props) {
    const provinceData = props.provinceData;

    return (
        <div>
            <h3>Ranking table</h3>
            <ol>
                {provinceData.map(e => {
                    return <li key={e.province}>{e.province} {e.cumulativeCases}</li>
                })}
            </ol>
        </div>
    )
}

export default rank
