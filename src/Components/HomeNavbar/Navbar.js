import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import firebase from 'firebase'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const Logout = () => {
    if(window.confirm("Do you want to Logout?")){
      firebase.auth().signOut()
    }
  }

  return (
    <>
     
        <div className='navbar'>
            <h2 className='name'><b className='nameteam1'>FRONTLINE</b> <b className='nameteam2'>SQUADRON</b></h2>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars className="icone" onClick={showSidebar} />
          </Link>
          <button className='logout' onClick={Logout}>Signout</button>
          <a className="forum" href="https://frontline-forum.web.app/">Forum</a>
        </div>
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                
                <img className="imgfs" 
                        alt="profile picture"
                        src={firebase.auth().currentUser.photoURL}
                    />
              </Link>
              
            </li>
            <div style={{marginTop:"10px",marginLeft:"70px"}}><h5 >{firebase.auth().currentUser.displayName}</h5></div>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      
    </>
  );
}

export default Navbar;
