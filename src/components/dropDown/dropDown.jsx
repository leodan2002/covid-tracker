import React from 'react'
import "./dropDown.css"

function dropdown(props) {
    const value = props.value;
    const handleChange = props.handleChange;

    return (
        <div>
            <select className="dropdown-wrapper" value={value} onChange={handleChange}>
                <option value="Ontario">
                    Ontario
                </option>
                <option value="Alberta">
                    Alberta
                </option>
                <option value="BC">
                    BC
                </option>
                <option value="Manitoba">
                    Manitoba
                </option>
                <option value="New Brunswick">
                    New Brunswick
                </option>
                <option value="NL">
                    NL
                </option>
                <option value="Nova Scotia">
                    Nova Scotia 
                </option>
                <option value="Nunavut">
                    Nunavut
                </option>
                <option value="NWT">
                    NWT
                </option>
                <option value="PEI">
                    PEI
                </option>
                <option value="Quebec">
                    Quebec
                </option>
                <option value="Saskatchewan">
                    Saskatchewan
                </option>
                <option value="Yukon">
                    Yukon
                </option>
            </select>
        </div>
    )
}

export default dropdown
