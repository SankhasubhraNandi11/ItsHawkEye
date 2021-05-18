import React,{useState} from 'react'
import Chatbots from './components/popup/Chatbots'
import { MdForum } from "react-icons/md";
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import './Chatbotmain.css'

function Chatbotmain() {
    const [show,setShow] =useState(false);
    return (
        <div className="divi">
            <div className="divi1"><QuestionAnswerIcon className="icon" onClick={() => setShow(!show)} /></div>
            {
                show?<Chatbots/>:null
            }
            
        </div>
    )
}

export default Chatbotmain
