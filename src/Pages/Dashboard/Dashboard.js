import React from 'react'
import Cards1 from '../Extras/Cards/Cards1'
import Footer from '../Store/components/Footer'
import img from './Agri.png'
import DData from './DData'
import Table from './Table/Table'

function Dashboard() {
    return (
        <div>
            <DData/>
            <Cards1/>
            <img src={img}/>
            <Table/>
            <Footer/>
        </div>
    )
}

export default Dashboard
