import React from 'react'
import './Searchbar.css'
import { BiSearchAlt } from 'react-icons/bi';
import { IconContext } from 'react-icons';

function Searchbar() {
    return (
        <div class="search-txt">
            <input  class="search-txt1" type="text"  name=""  placeholder="Type to search"></input>
            
            <IconContext.Provider value={{size: 28,className:"ic1"}}> <BiSearchAlt/></IconContext.Provider>
            
        </div>
    )
}

export default Searchbar
