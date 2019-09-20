import React from 'react';
import ListContextProvider from './contexts/ListContext';
import NavBar from './components/NavBar';
import ListToDo from './components/ListToDo';
import AddListForm from './components/AddListForm';
import ThemeContextProvider from './contexts/ThemeContext';


function App() {
  return (
    <div className="App">
      <ListContextProvider>
        <NavBar></NavBar>
        <ThemeContextProvider>
          <ListToDo></ListToDo>
        </ThemeContextProvider>
        <AddListForm></AddListForm>
        
      </ListContextProvider> 
    </div>
  );
}

export default App;
