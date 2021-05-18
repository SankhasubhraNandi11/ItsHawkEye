import tableau from 'tableau-api';
import React, { Component } from 'react'; 


class Tableau extends Component {  
  componentDidMount() {  
    this.initViz()  
  }  


  initViz() {  
  const vizUrl = 'https://prod-apnortheast-a.online.tableau.com/t/agri/views/Agri1/Dashboard2?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link&:device=desktop';  
    const vizContainer = this.vizContainer;  
    let viz = new window.tableau.Viz(vizContainer, vizUrl)  
  }  


  render() {  
    return (  
      <div style={{width:"100%", height:"100%"}} ref={(div) => { this.vizContainer = div }}>  
      </div>  
    )  
  }  
}  
export default Tableau
