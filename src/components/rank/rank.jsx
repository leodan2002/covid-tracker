import React from 'react'
import './rank.css'

function rank(props) {
    const provinceData = props.provinceData;

    return (
        <div className="ranking-table">
            <ol className="ranking-list">
                {provinceData.map(e => {
                    return <div className="table-wrapper">
                            <div className="provinces-names">
                                <li  key={e.province}>{e.province}:  </li>
                                
                            </div>
                            <div className="cases-numbers">
                                <li  key={e.province}>{e.cumulativeCases}</li>
                            </div>
                    </div>
                            
                })}
            </ol>
        </div>
    )
}

export default rank
