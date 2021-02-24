import React,{useRef,useEffect} from 'react'

const {tableau} = window;

function Tableau() {
    const ref=useRef(null)
    const url="https://public.tableau.com/views/Agri1/Agri";

    function initViz(){
        new tableau.Viz(ref.current,url);
    }

    useEffect(()=>{
        initViz();
    },[])

    return (
        <div ref={ref}>
            sgs
        </div>        
    )
}

export default Tableau
