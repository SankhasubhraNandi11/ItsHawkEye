import React from 'react'
import './Table.css'

function Table() {
    return (
        <div class="table-content1">
            <h1>Atmospheric Variable Record - Past 3 months</h1>
            <table class="content-table1">
                <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>Month</th>
                    <th>pH</th>
                    <th>Atm Temp.</th>
                    <th>Humidity</th>
                    <th>Pressure</th>
                    
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1.</td>
                    <td>June</td>
                    <td>6.5</td>
                    <td>20.87°C </td>
                    <td>80.24</td>
                    <td>1010.43</td>
                </tr>
                <tr class="active-row1">
                    <td>2.</td>
                    <td>July</td>
                    <td>7.6</td>
                    <td>25.89°C</td>
                    <td>83.21</td>
                    <td>1030.446</td>
                </tr>
                <tr>
                    <td>3.</td>
                    <td>August</td>
                    <td>5.7</td>
                    <td>23.97°C</td>
                    <td>85.3</td>
                    <td>1021.344</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table
