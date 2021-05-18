import React from 'react'
import Chatbot from '../../Components/Chatbot/ChatBot'
import Cards1 from '../Extras/Cards/Cards1'
import Tableau from '../Extras/Tableau'
import DData from './DData'
import Table from './Table/Table'

function Dashboard() {
    return (
        <div>
            <DData />
            <Cards1 />
            <Chatbot/>

                <Table />
            
        </div>
    )
}

export default Dashboard
