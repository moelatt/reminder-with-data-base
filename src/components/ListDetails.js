import React, { useContext } from 'react';
import  { ListContext } from '../contexts/ListContext';
import {ThemeContext} from '../contexts/ThemeContext'



const ListDetails = ({ list }) => {
    const {dispatch} = useContext(ListContext)
    const{passFuncTheme} = useContext(ThemeContext);
    const theme = list.completedBool ? "line-through" : "none"
    const dayLeftModifier = () => {
        var date = list.dateLeft;
        var dayStr = '';
        if(isNaN(date) ){
            dayStr = `enter date manually`
        }  
        else if(date <= 0){
            date = 0;
            dayStr = `${date} day left`
        }
        else{
            date = date + 1
            dayStr = `${date} days left`
        }  
        return dayStr;
    }
    
    return (                 // removeBook(book.id)  // onClick = {() => dispatch({type: 'Remove_List', id: list.id})}
        <li className="single-list" style = {{textDecoration: theme, color: "#D5DBDB", transform: "translateY(4px)"}} onClick = {passFuncTheme.bind(this, list.id)}>
            <button className = "btn" 
                        type = 'button'
                        onClick = {() => dispatch({type: 'Remove_List', id: list.id})}>X
            </button>
            <div className="title">{list.title} <span className = "days-left">{dayLeftModifier()}</span></div>
            <div className="author">{list.date}</div>
            
        
        </li>
     );
}
 
export default ListDetails;