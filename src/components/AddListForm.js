import React, {useContext, useState } from 'react';
import { ListContext } from '../contexts/ListContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AddListForm = () => {
    const{dispatch} = useContext(ListContext);
    const[title, setTitle] = useState("");
    // const[dateLeft] = useState('')
    const [date, setDate] = useState('');

    const todayDate = new Date();

    const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = (e) => {
        e.preventDefault();
        var mdy = date.split('/')
        var inputDate = new Date(mdy[2], mdy[0] - 1, mdy[1]);
        var  dateLeft = Math.round((inputDate - todayDate)/(1000*60*60*24));
        var completed = false;
        console.log( dateLeft + " days left");
        dispatch({type: 'Add_List', list: {title, date, dateLeft, completed}})
        // addBook(title, date, dateLeft, completed)
        setTitle('');
        setDate('');
        setStartDate('');
    }
    const handleChange = (date) => {
         setStartDate(date)
    }
    return ( 
        <form onSubmit = {handleSubmit} >
            <input 
                type ='text' 
                placeholder= 'what is your plan for today?' 
                value = {title}
                onChange = {(e) => setTitle(e.target.value)}>
            </input>
            {/* <input 
                type ='text' 
                placeholder= 'Due Date' 
                value = {date}
                onChange = {(e) => setDate(e.target.value)}>
            </input> */}
            <div>
                <DatePicker selected={startDate} 
                            dateFormat="MM/dd/yyyy"
                            onChange={handleChange } 
                            value = {setStartDate}
                            
                            onChangeRaw = {(e) => setDate(e.target.value)} 
                            placeholderText ='Due Date'
                             
                            />
                    <span><input type = 'submit' value = 'Add List'/></span>  

            </div>
        </form>
        
     );
}
 
export default AddListForm;