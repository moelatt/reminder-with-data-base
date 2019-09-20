import React, { useState, createContext, useContext, useEffect } from 'react';
import  { ListContext } from './ListContext';


export const ThemeContext = createContext(); 
const ThemeContextProvider = (props) => {
    const[state, setState] = useState({}, () =>{
        const localData = window.localStorage.getItem('complete')   
        return localData ? JSON.parse(localData) : [];
    } )
    const { lists} = useContext(ListContext)
    
    useEffect(() =>{
            window.localStorage.setItem('complete' , JSON.stringify(state)) 
     }, [state]);

     
    const completeFunc = (passID) => {
        // setState({completed: !completed})
        setState({lists :lists.map(list => {
            if(list.id === passID){
                list.completedBool = !list.completedBool
            }
                return (list.completedBool)
            })})

        
    }

    return ( 
        <ThemeContext.Provider value = {{...state, passFuncTheme: completeFunc }}>
            {props.children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;
// import React, { Component, createContext } from 'react';
// import { ListContext } from './ListContext';

// export const ThemeContext = createContext();

// class ThemeContextProvider extends Component {
//     static contextType = ListContext;
    
//     state = { 
//         completed: false,
//         line: {
//             textDecoration: "line-through"
//         },
//         noLine: {
//             textDecoration: "none"
//         }
//      }
//      passTheme = (id) => {
//         this.setState({ 
//             completed: !this.state.completed
//         })    
//     }    
         
//     render() {
//         return ( 
//             <ThemeContext.Provider  value= {{...this.state, passFuncTheme: this.passTheme}}>
//                 {this.props.children}
//             </ThemeContext.Provider>
//          );
//     }
// }
// export default ThemeContextProvider;

