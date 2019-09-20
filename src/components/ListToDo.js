import React, { useContext } from 'react';
import { ListContext } from '../contexts/ListContext';
import  ListDetails from './ListDetails';
// import  {ThemeContext } from '../contexts/ThemeContext'


const ListToDo = ( ) => {
    const {lists} = useContext(ListContext);
   
    var date = new Date().getDate();
    var month = new Date().getMonth()+1;
    var year = new Date().getFullYear();

    function addZero(n){
        return(parseInt(n) < 10 ? '0' : '') + n;
    }
    
    return lists.length ? ( 
        <div className = 'reminder-list' >
            <div className = "dateClass">Today date: {addZero(month)}/{addZero(date)}/{year}</div>
            <ul >
                {lists.map(list =>{
                    return(<ListDetails key = {list.id} list = {list}/>);
                })}
            </ul>
        </div>
     ) : (
         <div className = "empty"> You do not have anything to do. What is your plan for future?</div>
     );
}
 
export default ListToDo;