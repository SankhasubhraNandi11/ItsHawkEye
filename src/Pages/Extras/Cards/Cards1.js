import React from 'react'
import './Cards1.css'

function Cards1() {
    return (
        <div className="c1">
            <div className="c2" style={{backgroundColor: "#009879"}}>
                <h2 className="h21" >T/ha 27</h2>
                <p className="p1">Predicted Yield</p>
            </div>
            <div className="c2" style={{backgroundColor: "#03a1fc"}}>
                <h2 className="h21">Temp (°C) 33</h2>
                <p className="p1">Today's Temperature</p>
            </div>
            <div className="c2" style={{backgroundColor: "#f56e00"}}>
                <h2 className="h21">Humidity (%) 82</h2>
                <p className="p1">Humidity Today</p>
            </div> 
            <div className="c2" style={{backgroundColor: "#f7d139"}}>
                <h2 className="h21">Rainfall (mm) 203</h2>
                <p className="p1">Average</p>
            </div>       
        </div>
    )
}

export default Cards1
