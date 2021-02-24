import React from 'react'
import FData from './FData'
import './Farmanalysis.css'
import land from './c.jpg'
import id from './custom.png'
import Footer from '../Store/components/Footer'
import Cards2 from '../Extras/Cards/Cards2'

function Farmanalysis() {
    return (
        <div>
            <FData/>
            <Cards2/>
            <div className="f1">
                    <img className="land" src={land} />
                    <div className="f2">
                        <img className="id" src={id}/>
                        <div className="ar">
                            <h1 className="h1">Analysis Report</h1>
                            <p>As per your request we did a detailed analysis of your Farm and the results are as follows:</p>
                            <div className="f3">
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                        <th>SoilTest?</th>
                                        <th>Yield</th>
                                        <th>Predicted Crop</th>
                                        <th>Land Health</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="active-row">
                                        <td>Yes</td>
                                        <td>35.23</td>
                                        <td>Rice</td>
                                        <td>Healthy </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            </div>
            <button className="btn">Generate Detailed Report</button>
            <Footer/>
        </div>
        
    )
}

export default Farmanalysis
