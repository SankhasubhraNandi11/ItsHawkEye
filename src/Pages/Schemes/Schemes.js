import React from 'react'
import Table1 from '../Schemes/Table1'
import pic1 from '../Alerts/components/1.png'
import Chatbot from '../../Components/Chatbot/ChatBot'

function Schemes() {
    return (
        <div>

            <img className="jugad" src={pic1}></img>
            <Chatbot/>
            <Table1/>
            
        </div>
    )
}

export default Schemes
