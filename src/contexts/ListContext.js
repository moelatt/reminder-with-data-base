import React, { createContext, useReducer, useEffect } from 'react';
// import uuid from 'uuid/v1'
import { ListReducer } from '../Reducers/ListReducer';

export const ListContext = createContext();
const ListContextProvider = (props) => {
    // lists = original data and setBooks = to change the state or data
    const [lists, dispatch] = useReducer(ListReducer,[], 
        () => {
        const localData = localStorage.getItem('lists');
        return localData ? JSON.parse(localData) : []; 
    });

    // store the data in local storage
    useEffect(() =>{
        localStorage.setItem('lists', JSON.stringify(lists))
    }, [lists]);
   

    // const addBook = (title, date, dateLeft, completed) => {
    //     setState([...lists, {title: title, date: date,dateLeft: dateLeft, completedBool: completed ,id: uuid()}]);
    // };

    // const removeBook = (id) => {
    //     setState(lists.filter(book => book.id !== id))
       
    // }
    // const completeFunc = (passID) => {
    //     // setState({completed: !completed})
    //     setState({lists :lists.map(list => {
    //         if(list.id === passID){
    //             list.completedBool = !list.completedBool
    //         }
    //             return (list.completedBool)
    //         })})
    //         console.log(passID);
    // }

    return (                          // {{lists, addBook, removeBook}}
        <ListContext.Provider value = {{lists,dispatch}}>
            {props.children}
        </ListContext.Provider>
     );
}
 
export default ListContextProvider;