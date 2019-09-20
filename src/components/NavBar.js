import React, { useContext } from 'react';

// Context folder
import { ListContext } from '../contexts/ListContext';


const NavBar = () => {
    // grap the lists from ListContext file
    const {lists} = useContext(ListContext)
    return ( 
        <div className= "nav-bar">
            <h1>Reminder List</h1><span><img className="image" src ={require("../img/list.svg")} alt = ""></img></span>
            <p>Currently you have {lists.length} List to do...</p>
        </div>
     );
}
 
export default NavBar;