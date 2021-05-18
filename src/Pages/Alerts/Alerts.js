import React from 'react'
import img from './a.jpeg'
import './Alerts.css'
import Newsapp from './Newsapp'
import Weatherapp from './Weatherapp'
import pic1 from '../Alerts/components/1.png'
import pic2 from '../Alerts/components/2.png'
import pic3 from '../Alerts/components/3.png'
import pic4 from '../Alerts/components/4.png'
import Chatbotmain from '../Extras/Chatbot/Chatbotmain'
import Chatbot from '../../Components/Chatbot/ChatBot'

function Alerts() {
    return (
        <div className = "a0">
            <img className="jugad" src={pic1}></img>
            <div className = "pics">
               <div className = "alert">
                  <img style={{marginLeft:"60px"}} src={pic1}>
                  </img>
                  <h1>Live Weather!</h1>
               </div>
               <div className = "alert">
                  <img src={pic2}>
                  </img>
                  <h1>Agri News</h1>
               </div>
               <div className = "alert">
                  <img src={pic3}>
                  </img>
                  <h1>Push Notifications</h1>
               </div>
               <div className = "alert">
                  <img src={pic4}>
                  </img>
                  <h1>Alerts!</h1>
               </div>
            </div>
            <div className="a1">
               <Chatbot/>
                <div className="a3"><ul><Newsapp/></ul></div>
                <Weatherapp/>
                
                
            </div>

        </div>
    )
}

export default Alerts
