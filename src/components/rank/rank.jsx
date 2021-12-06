import React from 'react'

function rank(props) {
    const provinceData = props.provinceData;

    return (
        <div>
            <ol>
                {provinceData.map(e => {
                    return <li key={e.province}>{e.province} {e.cumulativeCases}</li>
                })}
            </ol>
        </div>
    )
}

export default rank
