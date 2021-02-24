import React from 'react'
import './Cards2.css'

function Cards2() {
    return (
        <div className="c1">
            <div className="c2" style={{backgroundColor: "#009879"}}>
                <h2 className="h21" >Area (ha) 3</h2>
                <p className="p1">Predicted Yield</p>
            </div>
            <div className="c2" style={{backgroundColor: "#03a1fc"}}>
                <h2 className="h21">ph 1</h2>
                <p className="p1">Slightly Basic</p>
            </div>
            <div className="c2" style={{backgroundColor: "#f56e00"}}>
                <h2 className="h21">February 24</h2>
                <p className="p1">Date</p>
            </div> 
            <div className="c2" style={{backgroundColor: "#f7d139"}}>
                <h2 className="h21">Moisture (gm/m^3) 4</h2>
                <p className="p1">Average</p>
            </div>       
        </div>
    )
}

export default Cards2
